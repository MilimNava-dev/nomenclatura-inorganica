import { elements } from "../../data/elements";
import {
  ternarySaltMetals,
} from "../../data/compoundElements";

import {
  polyatomicIons,
} from "../../data/polyatomicIons";

import {
  createHydrogenatedAnion,
} from "../createHydrogenatedAnion";

import { randomItem } from "../utils";
import { buildIonicFormula } from "../buildIonicFormula";
import { stockName } from "../generateName";

export function generateHydrogenatedTernarySalt() {
  const availableAnions =
    polyatomicIons.filter(
      (ion) => ion.charge <= -2
  );

  let anion;
  let hydrogenCount;
  let hydrogenated;

  do {
    anion = randomItem(
      availableAnions
    );

    hydrogenCount =
      randomInt(1, Math.abs(anion.charge) - 1);

    hydrogenated =
      createHydrogenatedAnion(
        anion,
        hydrogenCount
      );
  } while (!hydrogenated);

  const metalSymbol = randomItem(
    ternarySaltMetals
  );

  const metal = elements[metalSymbol];

  const oxidationState = randomItem(
    metal.oxidationStates
  );

  const formula = buildIonicFormula(
    metal,
    oxidationState,
    hydrogenated,
    hydrogenated.charge
  );

  const name = stockName(
    metal,
    oxidationState,
    hydrogenated.name
  );

  return {
    formula,
    name,
    category:
      "hydrogen-ternary-salts",
  };
}

function randomInt(min, max) {
  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;
}
