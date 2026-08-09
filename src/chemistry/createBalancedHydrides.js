export function createBalancedHydrides(total) {
  const result = [];

  const half = Math.floor(total / 2);

  for (let i = 0; i < half; i++) {
    result.push("metal");
    result.push("nonmetal");
  }

  if (total % 2 !== 0) {
    result.push(
      Math.random() < 0.5
        ? "metal"
        : "nonmetal"
    );
  }

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [result[i], result[j]] = [
      result[j],
      result[i],
    ];
  }

  return result;
}
