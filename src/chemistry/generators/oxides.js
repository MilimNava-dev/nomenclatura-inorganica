import { generateMetalOxide } from "./metalOxides";
import { generateNonmetalOxide } from "./nonmetalOxides";

export function generateOxide(subtype) {
  if (subtype === "metal") {
    return generateMetalOxide();
  }

  return generateNonmetalOxide();
}
