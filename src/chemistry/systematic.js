import { getPrefix, getOxidePrefix } from "./prefixes";
import { deElement } from "./catalan";

export function systematicBinaryName(
  firstName,
  firstCount,
  secondName,
  secondCount
) {
  const firstPrefix =
    firstCount > 1
      ? getPrefix(firstCount)
      : "";

  const secondPrefix =
    getPrefix(secondCount);

  return `${firstPrefix}${firstName}ur de ${secondPrefix}${secondName}`;
}


export function systematicOxideName(
  elementName,
  oxygenCount,
  elementCount
) {
  const oxidePrefix =
    getOxidePrefix(oxygenCount);

  const elementPrefix =
    elementCount > 1
      ? getPrefix(elementCount)
      : "";

  const name =
    `${elementPrefix}${elementName}`;

  return `${oxidePrefix}òxid ${deElement(name)}`;
}
