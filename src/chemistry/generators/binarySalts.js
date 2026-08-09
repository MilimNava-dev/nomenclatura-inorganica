import { elements } from "../../data/elements";
import { binarySaltMetals } from "../../data/compoundElements";
import { randomItem } from "../utils";
import { buildIonicFormula } from "../buildIonicFormula";
import { stockName } from "../generateName";
import { binaryAnionNames } from "../../data/anionNames";

const binaryAnions = [
  {
    symbol: "F",
    charge: -1,
  },
  {
    symbol: "Cl",
    charge: -1,
  },
  {
    symbol: "Br",
    charge: -1,
  },
  {
    symbol: "I",
    charge: -1,
  },
  {
    symbol: "S",
    charge: -2,
  },
];

export function generateBinarySalt() {
  const metalSymbol = randomItem(
    binarySaltMetals
  );

  const metal = elements[metalSymbol];

  const oxidationState = randomItem(
    metal.oxidationStates
  );

  const anion = randomItem(binaryAnions);

  const formulaAnion = {
    formula: anion.symbol,
    symbol: anion.symbol,
    charge: anion.charge,
    polyatomic: false,
  };

  const formula = buildIonicFormula(
    metal,
    oxidationState,
    formulaAnion,
    anion.charge
  );

  const anionName =
    binaryAnionNames[anion.symbol];

  const name = stockName(
    metal,
    oxidationState,
    anionName
  );

  return {
    formula,
    name,
    category: "binary-salts",
  };
}
