export function createBalancedSubtypes(total) {
  const subtypes = [];

  const half = Math.floor(total / 2);

  for (let i = 0; i < half; i++) {
    subtypes.push("metal");
    subtypes.push("nonmetal");
  }

  if (total % 2 !== 0) {
    subtypes.push(
      Math.random() < 0.5
        ? "metal"
        : "nonmetal"
    );
  }

  for (let i = subtypes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [subtypes[i], subtypes[j]] = [
      subtypes[j],
      subtypes[i],
    ];
  }

  return subtypes;
}
