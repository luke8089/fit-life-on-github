
import { useEffect, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface WorkoutTimerProps {
  defaultDuration?: number;
}

export function WorkoutTimer({ defaultDuration = 60 }: WorkoutTimerProps) {
  const [duration, setDuration] = useState(defaultDuration);
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive && !isPaused) {
      interval = window.setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    if (!isActive) {
      setIsActive(true);
      setIsPaused(false);
    } else {
      setIsPaused(!isPaused);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeRemaining(duration);
  };

  const handleDurationChange = (value: number[]) => {
    const newDuration = value[0];
    setDuration(newDuration);
    if (!isActive) {
      setTimeRemaining(newDuration);
    }
  };

  const getTimerColor = () => {
    const percentage = (timeRemaining / duration) * 100;
    if (percentage > 66) return "text-green-500";
    if (percentage > 33) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Workout Timer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className={`text-6xl font-bold ${getTimerColor()}`}>
            {formatTime(timeRemaining)}
          </div>
        </div>
        {!isActive && (
          <div className="space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              Set Timer Duration: {formatTime(duration)}
            </div>
            <Slider
              defaultValue={[duration]}
              max={300}
              min={10}
              step={5}
              onValueChange={handleDurationChange}
              disabled={isActive}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Button variant="outline" size="icon" onClick={resetTimer} disabled={!isActive && timeRemaining === duration}>
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button size="lg" onClick={toggleTimer}>
          {!isActive ? (
            <Play className="h-5 w-5 mr-2" />
          ) : isPaused ? (
            <Play className="h-5 w-5 mr-2" />
          ) : (
            <Pause className="h-5 w-5 mr-2" />
          )}
          {!isActive ? "Start" : isPaused ? "Resume" : "Pause"}
        </Button>
      </CardFooter>
    </Card>
  );
}
