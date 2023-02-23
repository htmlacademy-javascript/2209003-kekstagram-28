export const createElements = (creator, count) => (
  Array.from({ length: count }, creator)
);
