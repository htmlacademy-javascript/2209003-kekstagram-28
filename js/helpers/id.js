export const getIdGenerator = (uniqueSubstring = '') => {
  let id = 1;
  return () => `${id++}${uniqueSubstring}`;
};
