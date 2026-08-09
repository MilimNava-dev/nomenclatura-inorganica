export function createHydrogenatedAnion(
  anion,
  hydrogenCount
) {
  const newCharge =
    anion.charge + hydrogenCount;

  if (newCharge >= 0) {
    return null;
  }

  const formula =
    hydrogenCount === 1
      ? `H${anion.formula}`
      : `H${hydrogenCount}${anion.formula}`;

  const prefix =
    hydrogenCount === 1
      ? "hidrogen"
      : "dihidrogen";

  return {
    formula,
    name: `${prefix}${anion.name}`,
    charge: newCharge,
    polyatomic: true,
  };
}
