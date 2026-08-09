import { elements } from "../../data/elements";
import {
  ternarySaltMetals,
} from "../../data/compoundElements";
import {
  polyatomicIons,
} from "../../data/polyatomicIons";

import { randomItem } from "../utils";
import { buildIonicFormula } from "../buildIonicFormula";
import { stockName } from "../generateName";

export function generateTernarySalt() {
  const metalSymbol = randomItem(
    ternarySaltMetals
  );

  const metal = elements[metalSymbol];

  const oxidationState = randomItem(
    metal.oxidationStates
  );

  const anion = randomItem(
    polyatomicIons
  );

  const formulaAnion = {
    symbol: anion.formula,
    formula: anion.formula,
    charge: anion.charge,
    polyatomic: true,
  };

  const formula = buildIonicFormula(
    metal,
    oxidationState,
    formulaAnion,
    anion.charge
  );

  const name = stockName(
    metal,
    oxidationState,
    anion.name
  );

  return {
    formula,
    name,
    category: "ternary-salts",
  };
}
