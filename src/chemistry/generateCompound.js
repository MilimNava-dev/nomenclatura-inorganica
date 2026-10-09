import { generateOxide } from "./generators/oxides";
import {
  generateMetalHydride,
  generateNonmetalHydride,
} from "./generators/hydrides";
import { generateHydroxide } from "./generators/hydroxides";
import { generateBinarySalt } from "./generators/binarySalts";
import { generateHydracid } from "./generators/hydracids";
import { generateOxoacid } from "./generators/oxoacids";
import { generateTernarySalt } from "./generators/ternarySalts";
import { generateHydrogenatedTernarySalt } from "./generators/hydrogenatedTernarySalts";
import { generateCommonName } from "./generators/common";
import { generatePeroxide } from "./generators/peroxides";
import { randomItem } from "./utils";

export function generateCompound(categories, options = {}) {
  const { oxideSubtype, hydrideSubtype } = options;

  const category = randomItem(categories);

  switch (category) {
    case "common":
      return generateCommonName();

    case "oxides":
      return generateOxide(oxideSubtype);

    case "peroxides":
      return generatePeroxide();

    case "hydrides":
      if (hydrideSubtype === "metal") {
        return generateMetalHydride();
      }

      return generateNonmetalHydride();

    case "hydroxides":
      return generateHydroxide();

    case "binary-salts":
      return generateBinarySalt();

    case "hydracids":
      return generateHydracid();

    case "oxoacids":
      return generateOxoacid();

    case "ternary-salts":
      return generateTernarySalt();

    case "hydrogen-ternary-salts":
      return generateHydrogenatedTernarySalt();

    default:
      throw new Error(`No hi ha generador per a: ${category}`);
  }
}
