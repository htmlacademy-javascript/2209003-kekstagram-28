const pictureInput = document.querySelector('.img-upload__input');

export const addPictureGetterChangeHandler = (handleFile) => {
  pictureInput.addEventListener('change', (event) => {
    handleFile(event.target.files[0]);
  });
};
