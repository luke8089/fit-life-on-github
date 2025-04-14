
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample exercise data
const exercises = [
  {
    id: 1,
    name: "Barbell Squat",
    category: "legs",
    equipment: "Barbell",
    target: "Quadriceps, Glutes",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Push-up",
    category: "chest",
    equipment: "Bodyweight",
    target: "Chest, Triceps, Shoulders",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Pull-up",
    category: "back",
    equipment: "Pull-up Bar",
    target: "Back, Biceps",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Deadlift",
    category: "back",
    equipment: "Barbell",
    target: "Lower Back, Hamstrings, Glutes",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Bench Press",
    category: "chest",
    equipment: "Barbell, Bench",
    target: "Chest, Triceps, Shoulders",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Plank",
    category: "core",
    equipment: "Bodyweight",
    target: "Core, Shoulders",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Dumbbell Curl",
    category: "arms",
    equipment: "Dumbbells",
    target: "Biceps",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Shoulder Press",
    category: "shoulders",
    equipment: "Dumbbells, Barbell",
    target: "Shoulders, Triceps",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Lunge",
    category: "legs",
    equipment: "Bodyweight, Dumbbells",
    target: "Quadriceps, Glutes, Hamstrings",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2574&auto=format&fit=crop"
  }
];

export default function Exercises() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Exercise Library</h1>
        <p className="text-muted-foreground">Browse exercises by muscle group or search for specific movements.</p>
      </div>

      <div className="relative w-full max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search exercises..."
          className="w-full pl-8"
        />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-7">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="chest">Chest</TabsTrigger>
          <TabsTrigger value="back">Back</TabsTrigger>
          <TabsTrigger value="legs">Legs</TabsTrigger>
          <TabsTrigger value="shoulders">Shoulders</TabsTrigger>
          <TabsTrigger value="arms">Arms</TabsTrigger>
          <TabsTrigger value="core">Core</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="overflow-hidden">
                <div 
                  className="h-48 w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${exercise.image})` }}
                />
                <CardHeader>
                  <CardTitle>{exercise.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-1 text-sm">
                    <span className="font-medium">Equipment:</span>
                    <span className="text-muted-foreground">{exercise.equipment}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="font-medium">Target:</span>
                    <span className="text-muted-foreground">{exercise.target}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        {["chest", "back", "legs", "shoulders", "arms", "core"].map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {exercises
                .filter((exercise) => exercise.category === category)
                .map((exercise) => (
                  <Card key={exercise.id} className="overflow-hidden">
                    <div 
                      className="h-48 w-full bg-cover bg-center" 
                      style={{ backgroundImage: `url(${exercise.image})` }}
                    />
                    <CardHeader>
                      <CardTitle>{exercise.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-1 text-sm">
                        <span className="font-medium">Equipment:</span>
                        <span className="text-muted-foreground">{exercise.equipment}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="font-medium">Target:</span>
                        <span className="text-muted-foreground">{exercise.target}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View Details</Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
