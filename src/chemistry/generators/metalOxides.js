import { elements } from "../../data/elements";
import { oxideMetals } from "../../data/compoundElements";
import { randomItem } from "../utils";
import { buildBinaryFormula } from "../generateFormula";
import { stockName } from "../generateName";

export function generateMetalOxide() {
  const symbol = randomItem(oxideMetals);
  const metal = elements[symbol];

  const oxidationState = randomItem(
    metal.oxidationStates
  );

  const formula = buildBinaryFormula(
    metal,
    oxidationState,
    elements.O,
    -2
  );

  const name = stockName(
    metal,
    oxidationState,
    "òxid"
  );

  return {
    formula,
    name,
    category: "oxides",
    subtype: "metal",
  };
}
