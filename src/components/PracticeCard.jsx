import { useState } from "react";

import { checkAnswer } from "@/chemistry/checkAnswer";
import { categories } from "@/data/categories";

import Formula from "@/components/Formula";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

function PracticeCard({ exercise, current, total, onNext, onBack, onResult, mode }) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const [showHint, setShowHint] = useState(false)

  const handleCheck = () => {
    if (!answer.trim()) return;

    const isFormulaToName = mode === "formula-to-name";

    const correctAnswer = isFormulaToName ? exercise.name : exercise.formula;

    const answerType = isFormulaToName ? "name" : "formula";

    const result = checkAnswer(
      answer,
      correctAnswer,
      answerType
    );

    setResult({
      type: result.type,
      correct: result.correct,
      answer: correctAnswer,
    });

    onResult(result)
  };

  const handleNext = () => {
    setAnswer("");
    setResult(null);
    setShowHint(false)
    onNext();
  };

  const progress = (current / total) * 100;

  const resultResponse = (res) => {
    switch (res.type) {
      case "correct":
        return ["✓ Correcte!", "La resposta és correcta."]
      case "accent": 
        return ["~ Accent incorrecte",
          <>
            <span>La resposta és correcta excepte per l'accentuació.</span>
            <span className="block mt-0.5">
              Resposta correcta:{' '}
              <span className="italic">{res.answer}</span>
            </span>
          </>]
      case "incorrect": 
        return ["✗ Incorrecte", 
          <>
            <span>Resposta correcta:{' '}</span>
            <span className="italic">{res.answer}</span>
          </>]
      default:
        return ["", ""]
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          ← Configuració
        </Button>

        <Badge variant="secondary">
          {current} / {total}
        </Badge>
      </div>

      <Progress value={progress} className="mb-6" />

      <Card>
        <CardHeader className="text-center">
          <a
            className="text-sm text-muted-foreground hover:underline"
            onClick={() => setShowHint((prev) => (!prev))}
          >
            {
              showHint
                ? categories.find(el => el.id === exercise.category)?.label || "Sals ternàries hidrogenades"
                : "Mostra Pista"
            }
          </a>

          <div className="py-8">
            <span className="text-4xl font-semibold tracking-wide">
              {exercise.direction === "formula-to-name" ? (
                <Formula formula={exercise.question} />
              ) : (
                exercise.question
              )}
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            {exercise.direction === "formula-to-name"
              ? "Quin és el nom d'aquest compost?"
              : "Quina és la fórmula d'aquest compost?"}
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder={
              exercise.direction === "formula-to-name"
                ? "Escriu el nom..."
                : "Escriu la fórmula..."
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleCheck();
              }
            }}
            disabled={result !== null}
          />

          {result === null && (
            <Button
              className="w-full"
              onClick={handleCheck}
              disabled={!answer.trim()}
            >
              Comprovar
            </Button>
          )}

          {result && (
            <div className="space-y-4">
              <div className="rounded-lg border p-4 text-center">
                {
                  <>
                    <p className="font-medium">{resultResponse(result)[0]}</p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {resultResponse(result)[1]}
                    </p>
                  </>
                }
              </div>

              <Button className="w-full" onClick={handleNext}>
                Següent →
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default PracticeCard;
