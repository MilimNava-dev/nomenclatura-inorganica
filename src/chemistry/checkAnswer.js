export function checkAnswer(
  userAnswer,
  correctAnswer,
  type
) {
  if (type === "formula") {
    const isFormulaCorrect = normalizeFormula(userAnswer) === normalizeFormula(correctAnswer);
    
    return {
      type: isFormulaCorrect ? "correct" : "incorrect",
      correct: isFormulaCorrect,
    };
  }

  const normalizedUser = normalizeName(userAnswer);
  const normalizedCorrect = normalizeName(correctAnswer);

  if (normalizedUser === normalizedCorrect) {
    return {
      type: "correct",
      correct: true,
    };
  }

  const userWithoutAccents =
    removeAccents(normalizedUser);

  const correctWithoutAccents =
    removeAccents(normalizedCorrect);

  if (
    userWithoutAccents === correctWithoutAccents
  ) {
    return {
      type: "accent",
      correct: true,
    };
  }

  return {
    type: "incorrect",
    correct: false,
  };
}

function normalizeName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function removeAccents(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeFormula(formula) {
  return formula
    .trim()
    .replace(/\s+/g, "")
    .replace(/[₀-₉]/g, (char) => {
      return String(
        "₀₁₂₃₄₅₆₇₈₉".indexOf(char)
      );
    });
}
