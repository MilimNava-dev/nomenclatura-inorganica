function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function createBalancedCategories(categories, totalExercises) {
  if (categories.length === 0 || totalExercises <= 0) {
    return [];
  }

  // Barregem les categories perquè el repartiment sobrant sigui aleatori.
  const shuffledCategories = shuffle(categories);

  // Repartim els exercicis de manera equilibrada.
  const result = Array.from(
    { length: totalExercises },
    (_, index) =>
      shuffledCategories[index % shuffledCategories.length]
  );

  // Barregem l'ordre perquè no apareguin en blocs.
  return shuffle(result);
}
