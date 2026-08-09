export const prefixes = {
  1: "mono",
  2: "di",
  3: "tri",
  4: "tetra",
  5: "penta",
  6: "hexa",
  7: "hepta",
  8: "octa",
  9: "nona",
  10: "deca",
};

export function getPrefix(number) {
  return prefixes[number] ?? `${number}-`;
}

export function getOxidePrefix(number) {
  if (number === 1) {
    return "mon";
  }

  return getPrefix(number);
}
