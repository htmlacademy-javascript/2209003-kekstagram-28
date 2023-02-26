export const getUniqueItems = (items) => [
  ...new Set(items)
];

export const isEqualByLength = (firstItems, secondItems) => (
  firstItems.length === secondItems.length
);

export const isCorrectByLength = (items, min, max) => {
  const length = items.length;

  return min <= length && length <= max;
};
