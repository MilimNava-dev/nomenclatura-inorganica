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

function toSubscript(number) {
  return String(number)
    .split("")
    .map((digit) => subscriptMap[digit])
    .join("");
}

function Formula({ formula }) {
  const parts = formula.split(/(\d+)/);

  return (
    <>
      {parts.map((part, index) => {
        if (/^\d+$/.test(part)) {
          return (
            <sub key={index}>
              {toSubscript(part)}
            </sub>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default Formula;
