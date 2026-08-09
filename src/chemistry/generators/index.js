import { generateOxide } from "./oxides";
import {
  generateMetalHydride,
  generateNonmetalHydride,
} from "./hydrides";
import { generateHydroxide } from "./hydroxides";
import { generateBinarySalt } from "./binarySalts";
import { generateHydracid } from "./hydracids";
import { generateOxoacid } from "./oxoacids";
import { generateCommonName } from "./common";

export const generators = {
  common: generateCommonName,

  oxides: generateOxide,

  hydrides: {
    metal: generateMetalHydride,
    nonmetal: generateNonmetalHydride,
  },

  hydroxides: generateHydroxide,

  "binary-salts": generateBinarySalt,

  hydracids: generateHydracid,

  oxoacids: generateOxoacid,
};
