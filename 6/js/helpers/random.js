export const getRandomIntegerNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export const getRandomIndexElement = (items) => (
  getRandomIntegerNumber(0, items.length - 1)
);

export const getRandomElement = (items) => (
  items[getRandomIndexElement(items)]
);

export const getRandomElements = (items, count = 1) => {
  const indexes = [];

  while ((indexes.length < count) && (items.length !== indexes.length)) {
    const randomIndex = getRandomIndexElement(items);

    if (indexes.includes(randomIndex)) {
      continue;
    }

    indexes.push(randomIndex);
  }

  return indexes.map((index) => items[index]);
};
