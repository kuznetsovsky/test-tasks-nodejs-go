#!/usr/bin/node

const formatNumber = (num) => num <= 9 ? ` ${num}` : `${num}`;
const print = (table) => console.log(table.join(' '));

const generateMultiplicationTable = (size) => {
  const num = parseInt(size);

  if (Number.isNaN(num)) {
    throw new TypeError('`size` must be a number');
  }

  if (num > 10) {
    throw new RangeError('`size` should not exceed 10');
  }

  let table = [];

  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      table.push('  ');
      continue;
    }

    table.push(formatNumber(i));
  }

  print(table);
  table = [];

  for (let i = 1; i <= num; i += 1) {
    table.push(formatNumber(i));

    for (let j = 1; j <= num; j += 1) {
      table.push(formatNumber(i * j));
    }

    print(table);
    table = [];
  }
};

// Примеры использовани
// generateMultiplicationTable(10);
generateMultiplicationTable(5);
