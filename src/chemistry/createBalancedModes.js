export function createBalancedModes(total) {
  const modes = [];

  const half = Math.floor(total / 2);

  for (let i = 0; i < half; i++) {
    modes.push("formula-to-name");
    modes.push("name-to-formula");
  }

  // Si el número total es impar, añadimos uno aleatorio.
  if (total % 2 !== 0) {
    modes.push(
      Math.random() < 0.5
        ? "formula-to-name"
        : "name-to-formula"
    );
  }

  // Fisher-Yates shuffle
  for (let i = modes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [modes[i], modes[j]] = [modes[j], modes[i]];
  }

  return modes;
}
