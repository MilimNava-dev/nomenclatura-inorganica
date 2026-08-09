import { useState } from "react";

import { createBalancedSubtypes } from "@/chemistry/createBalancedSubtypes";
import { createBalancedModes } from "@/chemistry/createBalancedModes";
import { generateCompound } from "@/chemistry/generateCompound";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import ModeSelector from "@/components/ModeSelector";
import CompoundSelector from "@/components/CompoundSelector";
import LengthSelector from "@/components/LengthSelector"
import PracticeCard from "@/components/PracticeCard";

function App() {
  const [mode, setMode] = useState("random");

  const [selectedCategories, setSelectedCategories] = useState([
    "common",
    "hydrides",
    "oxides",
  ]);

  const [sessionStats, setSessionStats] = useState({
    correct: 0,
    accent: 0,
    incorrect: 0,
  });

  const [isPracticing, setIsPracticing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [currentExercise, setCurrentExercise] = useState(1);

  const [exercise, setExercise] = useState(null);

  const [usedFormulas, setUsedFormulas] = useState([]);

  const [exerciseModes, setExerciseModes] = useState([]);
  const [oxideSubtypes, setOxideSubtypes] = useState([]);
  const [totalExercises, setTotalExercises] = useState(20);

  const startPractice = () => {
    const noCategoriesSelected = selectedCategories.length === 0
    const numberExercisesInvalid = totalExercises < 1
    const numberExercisesExcess = totalExercises > 50

    if (noCategoriesSelected) {
      return;
    } else if (numberExercisesInvalid) {
      setTotalExercises(1)
    } else if (numberExercisesExcess) {
      setTotalExercises(50)
    } else {
      setTotalExercises(prev => Math.floor(prev))
    }

    const modes =
      mode === "random"
        ? createBalancedModes(totalExercises)
        : Array(totalExercises).fill(mode);

    setExerciseModes(modes);

    const subtypes = selectedCategories.includes("oxides")
      ? createBalancedSubtypes(totalExercises)
      : [];

    setOxideSubtypes(subtypes);

    setUsedFormulas([]);

    const subtype = selectedCategories.includes("oxides")
      ? subtypes[0]
      : undefined;

    const newExercise = generateCompound(selectedCategories, {
      oxideSubtype: subtype,
    });

    setSessionStats({
      correct: 0,
      accent: 0,
      incorrect: 0,
    });

    setExercise(newExercise);
    setUsedFormulas([newExercise.formula]);

    setCurrentExercise(1);
    setIsPracticing(true);
  };

  const handleAnswerResult = (result) => {
    setSessionStats((previous) => ({
      ...previous,
      [result.type]: previous[result.type] + 1,
    }));
  };

  const nextExercise = () => {
    if (currentExercise < totalExercises) {
      const nextNumber = currentExercise + 1;

      const subtype = selectedCategories.includes("oxides")
        ? oxideSubtypes[nextNumber - 1]
        : undefined;

      const newExercise = generateUniqueExercise(selectedCategories, {
        oxideSubtype: subtype,
      });

      setExercise(newExercise);

      setUsedFormulas((previous) => [...previous, newExercise.formula]);

      setCurrentExercise(nextNumber);
    } else {
      setIsPracticing(false);
      setShowResults(true);
    }
  };

  const goBack = () => {
    setIsPracticing(false);
  };

  const generateUniqueExercise = (categories, options = {}) => {
    let newExercise;
    let attempts = 0;

    do {
      newExercise = generateCompound(categories, options);

      attempts++;
    } while (usedFormulas.includes(newExercise.formula) && attempts < 100);

    return newExercise;
  };

  if (showResults) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <h1 className="text-3xl font-bold">Sessió acabada!</h1>

              <p className="mt-2 text-muted-foreground">
                Aquí tens els teus resultats.
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-2xl font-bold text-green-900">{sessionStats.correct}</p>

                  <p className="text-sm text-muted-foreground">Correctes</p>
                </div>

                <div className="rounded-lg border p-4 text-center">
                  <p className="text-2xl font-bold text-yellow-800">{sessionStats.accent}</p>

                  <p className="text-sm text-muted-foreground">
                    Amb accentuació incorrecta
                  </p>
                </div>

                <div className="rounded-lg border p-4 text-center">
                  <p className="text-2xl font-bold text-red-900">{sessionStats.incorrect}</p>

                  <p className="text-sm text-muted-foreground">Incorrectes</p>
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={() => setShowResults(false)}
              >
                Tornar a la configuració
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  if (isPracticing) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
          <PracticeCard
            current={currentExercise}
            total={totalExercises}
            onNext={nextExercise}
            onBack={goBack}
            onResult={handleAnswerResult}
            mode={exerciseModes[currentExercise - 1]}
            exercise={{
              ...exercise,
              question:
                exerciseModes[currentExercise - 1] === "name-to-formula"
                  ? exercise.name
                  : exercise.formula,

              direction: exerciseModes[currentExercise - 1],
            }}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Nomenclatura inorgànica
            </h1>

            <p className="mt-3 text-muted-foreground">
              Practica la nomenclatura química inorgànica.
            </p>
          </div>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Configuració</h2>

              <p className="text-sm text-muted-foreground">
                Tria com vols practicar.
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              <ModeSelector value={mode} onChange={setMode} />
              <LengthSelector value={totalExercises} onChange={setTotalExercises}/>

              <CompoundSelector
                selected={selectedCategories}
                onChange={setSelectedCategories}
              />

              <Button
                className="w-full"
                size="lg"
                onClick={startPractice}
                disabled={selectedCategories.length === 0}
              >
                Començar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
