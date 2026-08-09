import { polyatomicIons } from "../../data/polyatomicIons";
import { randomItem } from "../utils";

export function generateOxoacid() {
  const ion = randomItem(polyatomicIons);

  return {
    formula: ion.acid.formula,
    name: ion.acid.name,
    category: "oxoacids",
  };
}
