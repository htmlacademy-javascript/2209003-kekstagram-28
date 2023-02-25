export const getFileSrc = (file, callback) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    callback(fileReader.result);
  };
};
