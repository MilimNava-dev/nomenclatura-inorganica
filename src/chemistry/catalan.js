export function deElement(name) {
  const vowels = ["a", "e", "i", "o", "u", "à", "è", "é", "í", "ò", "ó", "ú"];

  const isFirstVowel = vowels.includes(name[0].toLowerCase())
  const isHVowel =  name[0] === "h" && vowels.includes(name[1].toLowerCase())
  if (isFirstVowel || isHVowel) {
    return `d'${name}`;
  }

  return `de ${name}`;
}
