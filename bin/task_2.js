#!/usr/bin/node

function gcd(a, b) {
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function calculateCommonDivisors(numbers) {
  const { length } = numbers;

  if (length === 0) {
    throw new Error('`numbers` array must not be empty');
  }

  let g = numbers[0];

  for (let i = 1; i < length; i++) {
    g = gcd(numbers[i], g);
  }

  const divisors = new Set();

  for (let i = 1; i * i <= g; i++) {
    if (g % i === 0) {
      divisors.add(i);
      divisors.add(g / i);
    }
  }

  divisors.delete(1);
  console.log(Array.from(divisors.values()).sort());
}

// Пример использования
calculateCommonDivisors([42, 12, 18]);
