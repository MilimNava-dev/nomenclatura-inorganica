import { deElement } from "./catalan";

export function stockName(
  element,
  oxidationState,
  anionName
) {
  const roman = toRoman(
    Math.abs(oxidationState)
  );

  const oxidationText =
    element.oxidationStates.length > 1
      ? `(${roman})`
      : "";

  return `${anionName} ${deElement(element.name)}${oxidationText}`;
}

function toRoman(number) {
  const values = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (const [value, symbol] of values) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }

  return result;
}
