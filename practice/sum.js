export function calc(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; ++i) {
    sum += i;
  }
  return sum;
}

export function calcV2(n) {
  if (n <= 0) return 0;
  return n * (n + 1) / 2;
}

export function square(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}
export function numerator(n) {
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
  }

  return sum;
}
export function eveNumerator(n) {
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}
