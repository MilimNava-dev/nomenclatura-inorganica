import { randomItem } from "../utils";
import { elements } from "../../data/elements";
import { nonMetalHydrides } from "../../data/compoundElements";

const hydracidNames = {
  F: "fluorhídric",
  Cl: "clorhídric",
  Br: "bromhídric",
  I: "iodhídric",
  S: "sulfhídric",
  Se: "selenhídric",
  Te: "tel·lurhídric"
};

const negativeStates = {
  F: -1,
  Cl: -1,
  Br: -1,
  I: -1,
  S: -2,
};

export function generateHydracid() {
  const symbol = randomItem(
    nonMetalHydrides
  );

  const element = elements[symbol];

  const charge = negativeStates[symbol];

  const count = Math.abs(charge);

  const formula =
    count === 1
      ? `H${symbol}`
      : `H${count}${symbol}`;

  return {
    formula: `${formula}(aq)`,
    name: `àcid ${hydracidNames[symbol]}`,
    category: "hydracids",
  };
}
