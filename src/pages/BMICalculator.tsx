
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function BMICalculator() {
  const [measurementSystem, setMeasurementSystem] = useState<"metric" | "imperial">("metric");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    let bmiValue: number;
    if (measurementSystem === "metric") {
      // Metric: kg/m²
      const heightInMeters = parseFloat(height) / 100;
      bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    } else {
      // Imperial: (lbs * 703) / inches²
      bmiValue = (parseFloat(weight) * 703) / (parseFloat(height) * parseFloat(height));
    }

    setBmi(parseFloat(bmiValue.toFixed(1)));

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  const getBmiColor = () => {
    if (!bmi) return "bg-gray-200";
    if (bmi < 18.5) return "bg-blue-500";
    if (bmi >= 18.5 && bmi < 25) return "bg-green-500";
    if (bmi >= 25 && bmi < 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getBmiProgress = () => {
    if (!bmi) return 0;
    // Scale from 10 to 40 BMI
    const min = 10;
    const max = 40;
    const value = Math.max(min, Math.min(max, bmi));
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">BMI Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your Body Mass Index (BMI) to check if your weight is healthy.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calculate Your BMI</CardTitle>
            <CardDescription>
              BMI is a measure of body fat based on height and weight.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs
              value={measurementSystem}
              onValueChange={(v) => setMeasurementSystem(v as "metric" | "imperial")}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="metric">Metric</TabsTrigger>
                <TabsTrigger value="imperial">Imperial</TabsTrigger>
              </TabsList>
              <TabsContent value="metric" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="height-cm">Height (cm)</Label>
                  <Input
                    id="height-cm"
                    type="number"
                    placeholder="e.g., 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight-kg">Weight (kg)</Label>
                  <Input
                    id="weight-kg"
                    type="number"
                    placeholder="e.g., 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </TabsContent>
              <TabsContent value="imperial" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="height-in">Height (inches)</Label>
                  <Input
                    id="height-in"
                    type="number"
                    placeholder="e.g., 69"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight-lbs">Weight (lbs)</Label>
                  <Input
                    id="weight-lbs"
                    type="number"
                    placeholder="e.g., 155"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button onClick={calculateBMI} className="w-full">
              Calculate BMI
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Results</CardTitle>
            <CardDescription>
              Your BMI helps determine if you're at a healthy weight.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {bmi ? (
              <>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{bmi}</div>
                  <div className="text-xl font-medium">{category}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>10</span>
                    <span>25</span>
                    <span>40</span>
                  </div>
                  <Progress value={getBmiProgress()} className={`h-3 ${getBmiColor()}`} />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>
                </div>
                <div className="rounded-lg border p-4 text-sm">
                  <p className="mb-2">
                    <strong>What your BMI result means:</strong>
                  </p>
                  {category === "Underweight" && (
                    <p>
                      A BMI below 18.5 indicates that you may be underweight. Consider consulting with a healthcare professional.
                    </p>
                  )}
                  {category === "Normal weight" && (
                    <p>
                      A BMI between 18.5 and 24.9 indicates that you are at a healthy weight for your height.
                    </p>
                  )}
                  {category === "Overweight" && (
                    <p>
                      A BMI between 25 and 29.9 indicates that you may be overweight. Consider healthy lifestyle changes.
                    </p>
                  )}
                  {category === "Obesity" && (
                    <p>
                      A BMI of 30 or higher indicates obesity. It's recommended to consult with a healthcare professional.
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="h-[250px] flex items-center justify-center text-center">
                <p className="text-muted-foreground">
                  Enter your height and weight, then click "Calculate BMI" to see your results.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About BMI</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Body Mass Index (BMI) is a value derived from a person's weight and height. While BMI is a useful measurement for most people, it does have limitations. It may overestimate body fat in athletes and others with muscular builds, and underestimate body fat in older persons and others who have lost muscle mass.
          </p>
          <div className="mt-4 text-sm">
            <h3 className="font-medium mb-2">BMI Categories:</h3>
            <ul className="space-y-1 list-disc pl-5">
              <li>Below 18.5: Underweight</li>
              <li>18.5 - 24.9: Normal weight</li>
              <li>25.0 - 29.9: Overweight</li>
              <li>30.0 and Above: Obesity</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
