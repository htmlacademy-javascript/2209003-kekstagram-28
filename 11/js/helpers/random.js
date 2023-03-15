export const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

export const getRandomItems = (items, count) => {
  const result = [];
  const repeatedIndexes = [];

  const itemsLength = items.length;
  count = (count > itemsLength) ? itemsLength : count;

  while (result.length < count) {
    const randomIndex = getRandomNumber(0, itemsLength - 1);

    if (repeatedIndexes.includes(randomIndex)) {
      continue;
    }

    repeatedIndexes.push(randomIndex);
    result.push(items[randomIndex]);
  }

  return result;
};
