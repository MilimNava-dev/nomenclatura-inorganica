export function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

export function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

export function simplifyRatio(a, b) {
  const divisor = gcd(a, b);

  return {
    a: a / divisor,
    b: b / divisor,
  };
}

export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
