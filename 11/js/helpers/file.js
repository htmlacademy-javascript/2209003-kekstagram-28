export const handleFileUrl = (file, callback) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener('load', () => {
    callback(fileReader.result);
  });
};
