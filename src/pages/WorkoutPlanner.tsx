
import { useState } from "react";
import { Clock, Plus, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function WorkoutPlanner() {
  const [exercises, setExercises] = useState([
    { id: 1, name: "", sets: "", reps: "", rest: "" }
  ]);

  const addExercise = () => {
    const newId = exercises.length ? Math.max(...exercises.map(ex => ex.id)) + 1 : 1;
    setExercises([...exercises, { id: newId, name: "", sets: "", reps: "", rest: "" }]);
  };

  const removeExercise = (id: number) => {
    if (exercises.length > 1) {
      setExercises(exercises.filter(ex => ex.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Create Workout Plan</h1>
        <p className="text-muted-foreground">
          Design your custom workout routine by adding exercises, sets, and reps.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Workout Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="workout-name">Workout Name</Label>
              <Input id="workout-name" placeholder="e.g., Upper Body Strength" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workout-description">Description</Label>
              <Textarea 
                id="workout-description" 
                placeholder="Describe your workout..."
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="workout-type">Workout Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strength">Strength</SelectItem>
                    <SelectItem value="cardio">Cardio</SelectItem>
                    <SelectItem value="hiit">HIIT</SelectItem>
                    <SelectItem value="flexibility">Flexibility</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="estimated-duration">Estimated Duration (minutes)</Label>
              <div className="relative">
                <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="estimated-duration" 
                  type="number" 
                  placeholder="e.g., 45"
                  className="pl-8"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Exercise List</CardTitle>
            <Button variant="outline" size="sm" onClick={addExercise}>
              <Plus className="h-4 w-4 mr-1" /> Add Exercise
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {exercises.map((exercise, index) => (
              <div key={exercise.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Exercise {index + 1}</h3>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => removeExercise(exercise.id)}
                    disabled={exercises.length === 1}
                  >
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Exercise Name</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exercise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="squat">Squat</SelectItem>
                      <SelectItem value="deadlift">Deadlift</SelectItem>
                      <SelectItem value="bench-press">Bench Press</SelectItem>
                      <SelectItem value="pull-up">Pull-up</SelectItem>
                      <SelectItem value="push-up">Push-up</SelectItem>
                      <SelectItem value="lunge">Lunge</SelectItem>
                      <SelectItem value="plank">Plank</SelectItem>
                      <SelectItem value="shoulder-press">Shoulder Press</SelectItem>
                      <SelectItem value="bicep-curl">Bicep Curl</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Sets</Label>
                    <Input type="number" placeholder="e.g., 3" />
                  </div>
                  <div className="space-y-2">
                    <Label>Reps</Label>
                    <Input type="number" placeholder="e.g., 12" />
                  </div>
                  <div className="space-y-2">
                    <Label>Rest (sec)</Label>
                    <Input type="number" placeholder="e.g., 60" />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Save className="h-4 w-4 mr-2" /> Save Workout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
