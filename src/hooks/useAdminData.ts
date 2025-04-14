
import { useQuery } from "@tanstack/react-query";
import { createClient } from '@supabase/supabase-js';

// Get environment variables, with fallbacks to prevent errors
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client only if both URL and key are available
const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

interface AdminStats {
  totalUsers: number;
  activeWorkouts: number;
  scheduledSessions: number;
  userActivity: number;
}

// Mock data to use when Supabase credentials are missing
const mockAdminStats: AdminStats = {
  totalUsers: 120,
  activeWorkouts: 45,
  scheduledSessions: 78,
  userActivity: 32
};

export function useAdminData() {
  return useQuery({
    queryKey: ['admin-stats'],
    queryFn: async (): Promise<AdminStats> => {
      // If Supabase client isn't available, return mock data
      if (!supabase) {
        console.warn('Supabase credentials not configured. Using mock data.');
        return mockAdminStats;
      }

      try {
        // Fetch total users
        const { count: totalUsers } = await supabase
          .from('users')
          .select('*', { count: 'exact', head: true });

        // Fetch active workouts
        const { count: activeWorkouts } = await supabase
          .from('workouts')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'active');

        // Fetch scheduled sessions
        const { count: scheduledSessions } = await supabase
          .from('sessions')
          .select('*', { count: 'exact', head: true })
          .gte('scheduled_date', new Date().toISOString());

        // Fetch user activity (logged in last 24h)
        const { count: userActivity } = await supabase
          .from('user_activity')
          .select('*', { count: 'exact', head: true })
          .gte('last_active', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());

        return {
          totalUsers: totalUsers ?? 0,
          activeWorkouts: activeWorkouts ?? 0,
          scheduledSessions: scheduledSessions ?? 0,
          userActivity: userActivity ?? 0
        };
      } catch (error) {
        console.error('Error fetching admin data:', error);
        return mockAdminStats;
      }
    }
  });
}
