
import { Link } from "react-router-dom";
import { BarChart, Dumbbell, Home, ListTodo, Calculator, Timer } from "lucide-react";

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t border-border/40 md:hidden">
      <div className="grid h-full grid-cols-6">
        <Link to="/" className="flex flex-col items-center justify-center">
          <Home className="h-6 w-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Home</span>
        </Link>
        <Link to="/workouts" className="flex flex-col items-center justify-center">
          <Dumbbell className="h-6 w-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Workouts</span>
        </Link>
        <Link to="/exercises" className="flex flex-col items-center justify-center">
          <ListTodo className="h-6 w-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Exercises</span>
        </Link>
        <Link to="/planner" className="flex flex-col items-center justify-center">
          <BarChart className="h-6 w-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Plan</span>
        </Link>
        <Link to="/calculator" className="flex flex-col items-center justify-center">
          <Calculator className="h-6 w-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">BMI</span>
        </Link>
        <Link to="/timer" className="flex flex-col items-center justify-center">
          <Timer className="h-6 w-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Timer</span>
        </Link>
      </div>
    </div>
  );
}
