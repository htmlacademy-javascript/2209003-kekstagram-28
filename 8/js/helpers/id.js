export const getIdGenerator = () => {
  let id = 1;
  return () => id++;
};
