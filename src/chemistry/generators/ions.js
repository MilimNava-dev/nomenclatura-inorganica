import { polyatomicIons } from "../../data/polyatomicIons"
import { otherIons } from "../../data/otherIons"
import { randomItem } from "../utils" 

export function generateIons () {
  const item = randomItem([...polyatomicIons, ...otherIons])
  const charge = item.charge
  const chargeStr = charge > 0
    ? charge === 1
      ? "+"
      : `+${charge}`
    : charge === -1
      ? "-"
      : charge.toString()
  return {
    ...item,
    name: "ió " + item.name,
    formula: item.formula + chargeStr,
    category: "ions"
  }
}
