export const createElements = (creater, count) => (
  Array.from({ length: count }, creater)
);
