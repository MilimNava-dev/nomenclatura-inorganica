export function deElement(name) {
  const vowels = ["a", "e", "i", "o", "u", "à", "è", "é", "í", "ò", "ó", "ú"];

  if (vowels.includes(name[0].toLowerCase())) {
    return `d'${name}`;
  }

  return `de ${name}`;
}
