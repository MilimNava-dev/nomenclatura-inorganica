import { gcd } from "./utils";

export function buildBinaryFormula(
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

  const anionPart =
    anionCount === 1
      ? anion.symbol
      : `${anion.symbol}${anionCount}`;

  return `${cationPart}${anionPart}`;
}
