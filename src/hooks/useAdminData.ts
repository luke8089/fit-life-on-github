
import { useQuery } from "@tanstack/react-query";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

interface AdminStats {
  totalUsers: number;
  activeWorkouts: number;
  scheduledSessions: number;
  userActivity: number;
}

export function useAdminData() {
  return useQuery({
    queryKey: ['admin-stats'],
    queryFn: async (): Promise<AdminStats> => {
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
    }
  });
}
