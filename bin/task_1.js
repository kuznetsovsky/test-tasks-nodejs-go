#!/usr/bin/node

const pluralizeComputer = (numberOfComputers) => {
  const count = parseInt(numberOfComputers);

  if (Number.isNaN(count) || count <= 0) {
    throw new TypeError('`numberOfComputers` must be a positive number');
  }

  let declination = count % 100;
  if (declination >= 5 && declination <= 20) {
    return `${count} компьютеров`;
  }

  declination %= 10;
  if (declination === 1) {
    return `${count} компьютер`;
  } else if (declination >= 2 && declination <= 4) {
    return `${count} компьютера`;
  } else {
    return `${count} компьютеров`;
  }
};

// Примеры использования
console.log(pluralizeComputer(1));
console.log(pluralizeComputer(4));
console.log(pluralizeComputer(41));
console.log(pluralizeComputer(1048));
