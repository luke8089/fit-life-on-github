import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Exercises from "./pages/Exercises";
import WorkoutPlanner from "./pages/WorkoutPlanner";
import BMICalculator from "./pages/BMICalculator";
import Timer from "./pages/Timer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/planner" element={<WorkoutPlanner />} />
            <Route path="/calculator" element={<BMICalculator />} />
            <Route path="/timer" element={<Timer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
