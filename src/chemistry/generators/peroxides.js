import { elements } from "../../data/elements";
import { peroxideMetals } from "../../data/compoundElements";
import { randomItem } from "../utils";

export function generatePeroxide() {
  const symbol = randomItem(peroxideMetals);
  const metal = elements[symbol];

  // Grup 1: M2O2. Grup 2: MO2.
  const formula =
    symbol + (metal.group === 1 ? "2" : "") + "O2";

  const name = `peròxid de ${metal.name}`;

  return {
    formula,
    name,
    category: "peroxides",
  };
}
