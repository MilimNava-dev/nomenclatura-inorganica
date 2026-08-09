import { commonNames } from "../../data/commonNames";
import { randomItem } from "../utils";

export function generateCommonName() {
  return randomItem(commonNames);
}
