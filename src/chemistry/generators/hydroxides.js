import { elements } from "../../data/elements";
import { oxideMetals } from "../../data/compoundElements";
import { randomItem } from "../utils";
import { buildIonicFormula } from "../buildIonicFormula";
import { stockName } from "../generateName";

const hydroxide = {
  formula: "OH",
  charge: -1,
  polyatomic: true,
};

export function generateHydroxide() {
  const symbol = randomItem(oxideMetals);
  const metal = elements[symbol];

  const oxidationState = randomItem(
    metal.oxidationStates
  );

  const formula = buildIonicFormula(
    metal,
    oxidationState,
    hydroxide,
    -1
  );

  const name = stockName(
    metal,
    oxidationState,
    "hidròxid"
  );

  return {
    formula,
    name,
    category: "hydroxides",
  };
}
