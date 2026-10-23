const subscriptMap = {
  0: "₀",
  1: "₁",
  2: "₂",
  3: "₃",
  4: "₄",
  5: "₅",
  6: "₆",
  7: "₇",
  8: "₈",
  9: "₉",
};

const superscriptMap = {
  0: "⁰",
  1: "¹",
  2: "²",
  3: "³",
  4: "⁴",
  5: "⁵",
  6: "⁶",
  7: "⁷",
  8: "⁸",
  9: "⁹",
  "+": "⁺",
  "-": "⁻",
};

function toSubscript(text) {
  return String(text)
    .split("")
    .map((digit) => subscriptMap[digit] || digit)
    .join("");
}

function toSuperscript(text) {
  return String(text)
    .split("")
    .map((char) => superscriptMap[char] || char)
    .join("");
}

function Formula({ formula }) {
  // Expresión regular que divide el texto en:
  // 1. Un signo (+ o -) seguido opcionalmente de números (ej: +, +2, -3) -> Superíndice
  // 2. Números sueltos (ej: 2, 4) -> Subíndice
  // 3. El resto de caracteres (letras, etc.) -> Texto normal
  const parts = formula.match(/([+-]\d*|\d+|[^+\-\d]+)/g) || [];

  return (
    <>
      {parts.map((part, index) => {
        // Si es un ion con signo delante (+, -, +2, -3...)
        if (/^[+-]\d*$/.test(part)) {
          return (
            <sup key={index}>
              {toSuperscript(part)}
            </sup>
          );
        }

        // Si es un número normal (subíndice de la molécula)
        if (/^\d+$/.test(part)) {
          return (
            <sub key={index}>
              {toSubscript(part)}
            </sub>
          );
        }

        // Letras o símbolos normales
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default Formula;
