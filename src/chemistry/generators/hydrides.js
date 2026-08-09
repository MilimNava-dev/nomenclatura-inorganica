import { elements } from "../../data/elements";
import { oxideMetals } from "../../data/compoundElements";
import { nonMetalHydrides } from "../../data/compoundElements";
import { randomItem } from "../utils";
import { buildIonicFormula } from "../buildIonicFormula";
import { binaryAnionNames } from "../../data/anionNames";
import { stockName } from "../generateName";

export function generateMetalHydride() {
  const symbol = randomItem(oxideMetals);
  const metal = elements[symbol];

  const oxidationState = randomItem(
    metal.oxidationStates
  );

  const hydride = {
    symbol: "H",
    formula: "H",
    charge: -1,
    polyatomic: false,
  };

  const formula = buildIonicFormula(
    metal,
    oxidationState,
    hydride,
    -1
  );

  const name = stockName(
    metal,
    oxidationState,
    "hidrur"
  );

  return {
    formula,
    name,
    category: "hydrides",
    subtype: "metal",
    state: "(g)",
  };
}

export function generateNonmetalHydride() {
  const symbol = randomItem(
    nonMetalHydrides
  );

  const element = elements[symbol];

  // Para los grupos 16 y 17:
  // H tiene +1 y el no-metal actúa
  // con su estado negativo.
  const oxidationState =
    element.oxidationStates.find(
      (state) => state < 0
    );

  const hydride = {
    symbol: "H",
    formula: "H",
    charge: 1,
    polyatomic: false,
  };

  const anion = {
    symbol: element.symbol,
    formula: element.symbol,
    polyatomic: false,
  };

  const formula = buildIonicFormula(
    hydride,
    1,
    anion,
    oxidationState
  );

  return {
    formula: `${formula}(g)`,
    name: `${binaryAnionNames[symbol]} d'hidrogen`,
    category: "hydrides",
    subtype: "nonmetal",
    state: "(g)",
  };
}
