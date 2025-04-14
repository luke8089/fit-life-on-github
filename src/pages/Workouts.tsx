
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample workout data
const workouts = [
  {
    id: 1,
    title: "Full Body Strength",
    category: "strength",
    duration: "45 min",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "HIIT Cardio",
    category: "cardio",
    duration: "30 min",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Core Crusher",
    category: "strength",
    duration: "20 min",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Yoga Flow",
    category: "flexibility",
    duration: "60 min",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Upper Body Blast",
    category: "strength",
    duration: "40 min",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Lower Body Focus",
    category: "strength",
    duration: "35 min",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2669&auto=format&fit=crop"
  }
];

export default function Workouts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Workouts</h1>
        <p className="text-muted-foreground">Find the perfect workout for your goals.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search workouts..."
            className="w-full pl-8"
          />
        </div>
        <Button>
          <Link to="/planner">Create Workout</Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <Card key={workout.id} className="overflow-hidden">
                <div 
                  className="h-48 w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${workout.image})` }}
                />
                <CardHeader>
                  <CardTitle>{workout.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-muted-foreground">Level:</span>
                      <span>{workout.level}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Workout
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="strength" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts
              .filter((workout) => workout.category === "strength")
              .map((workout) => (
                <Card key={workout.id} className="overflow-hidden">
                  <div 
                    className="h-48 w-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${workout.image})` }}
                  />
                  <CardHeader>
                    <CardTitle>{workout.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">Duration:</span>
                        <span>{workout.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">Level:</span>
                        <span>{workout.level}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Start Workout
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="cardio" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts
              .filter((workout) => workout.category === "cardio")
              .map((workout) => (
                <Card key={workout.id} className="overflow-hidden">
                  <div 
                    className="h-48 w-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${workout.image})` }}
                  />
                  <CardHeader>
                    <CardTitle>{workout.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">Duration:</span>
                        <span>{workout.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">Level:</span>
                        <span>{workout.level}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Start Workout
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="flexibility" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts
              .filter((workout) => workout.category === "flexibility")
              .map((workout) => (
                <Card key={workout.id} className="overflow-hidden">
                  <div 
                    className="h-48 w-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${workout.image})` }}
                  />
                  <CardHeader>
                    <CardTitle>{workout.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">Duration:</span>
                        <span>{workout.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground">Level:</span>
                        <span>{workout.level}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Start Workout
                    </Button>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
