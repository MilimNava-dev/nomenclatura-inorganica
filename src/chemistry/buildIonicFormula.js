import { gcd } from "./utils";

export function buildIonicFormula(
  cation,
  cationCharge,
  anion,
  anionCharge
) {
  const divisor = gcd(
    Math.abs(cationCharge),
    Math.abs(anionCharge)
  );

  const cationCount =
    Math.abs(anionCharge) / divisor;

  const anionCount =
    Math.abs(cationCharge) / divisor;

  const cationPart =
    cationCount === 1
      ? cation.symbol
      : `${cation.symbol}${cationCount}`;

  const anionPart = formatAnion(
    anion.formula,
    anionCount,
    anion.polyatomic
  );

  return `${cationPart}${anionPart}`;
}

function formatAnion(formula, count, isPolyatomic) {
  if (count === 1) {
    return formula;
  }

  if (isPolyatomic) {
    return `(${formula})${count}`;
  }

  return `${formula}${count}`;
}
