
import { Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="hidden md:block">
            <span className="text-xl font-bold text-primary">FitLife</span>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link to="/workouts" className="text-sm font-medium transition-colors hover:text-primary">
              Workouts
            </Link>
            <Link to="/exercises" className="text-sm font-medium transition-colors hover:text-primary">
              Exercises
            </Link>
            <Link to="/planner" className="text-sm font-medium transition-colors hover:text-primary">
              Planner
            </Link>
            <Link to="/calculator" className="text-sm font-medium transition-colors hover:text-primary">
              Calculator
            </Link>
            <Link to="/timer" className="text-sm font-medium transition-colors hover:text-primary">
              Timer
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="" alt="User" />
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
