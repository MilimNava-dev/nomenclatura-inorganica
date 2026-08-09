import { elements } from "../../data/elements";
import { nonMetalOxides } from "../../data/compoundElements";
import { randomItem } from "../utils";
import { buildBinaryFormula } from "../generateFormula";
import { systematicOxideName } from "../systematic";

export function generateNonmetalOxide() {
  const symbol = randomItem(nonMetalOxides);
  const element = elements[symbol];

  const positiveStates =
    element.oxidationStates.filter(
      (state) => state > 0
    );

  const oxidationState = randomItem(
    positiveStates
  );

  const formula = buildBinaryFormula(
    element,
    oxidationState,
    elements.O,
    -2
  );

  const elementCount = getElementCount(
    formula,
    element.symbol
  );

  const oxygenCount = getElementCount(
    formula,
    "O"
  );

  const name = systematicOxideName(
    element.name,
    oxygenCount,
    elementCount
  );

  return {
    formula,
    name,
    category: "oxides",
    subtype: "nonmetal",
  };
}

function getElementCount(formula, symbol) {
  const regex = new RegExp(
    `${symbol}(\\d*)`
  );

  const match = formula.match(regex);

  if (!match) {
    return 0;
  }

  return match[1] === ""
    ? 1
    : Number(match[1]);
}
