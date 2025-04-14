
import { WorkoutTimer } from "@/components/workout/WorkoutTimer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Timer() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Workout Timer</h1>
        <p className="text-muted-foreground">Time your workouts and rest periods.</p>
      </div>

      <Tabs defaultValue="workout" className="w-full max-w-lg mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="workout">Workout Timer</TabsTrigger>
          <TabsTrigger value="interval">Interval Timer</TabsTrigger>
        </TabsList>
        <TabsContent value="workout" className="py-4">
          <WorkoutTimer defaultDuration={60} />
        </TabsContent>
        <TabsContent value="interval" className="py-4">
          <WorkoutTimer defaultDuration={30} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
