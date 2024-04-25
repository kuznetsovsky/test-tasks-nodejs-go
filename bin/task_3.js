#!/usr/bin/node

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function printPrimesInRange(min, max) {
  const start = parseInt(min);
  const end = parseInt(max);

  if (Number.isNaN(start)) {
    throw new TypeError('`min` must be a number');
  }

  if (Number.isNaN(end)) {
    throw new TypeError('`max` must be a number');
  }

  for (let num = start; num <= end; num++) {
    if (isPrime(num)) console.log(num);
  }
}

// Пример использования
printPrimesInRange(11, 20);
