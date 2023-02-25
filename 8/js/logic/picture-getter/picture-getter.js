const pictureInput = document.querySelector('.img-upload__input');

export const addPictureGetterChangeHandler = (fileLoadHandler) => {
  pictureInput.addEventListener('change', (event) => {
    fileLoadHandler(event.target.files[0]);
  });
};
