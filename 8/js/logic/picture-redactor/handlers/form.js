import { validator } from '../validation/index.js';

const pictureRedactorForm = document.querySelector('.img-upload__form');

const pictureRedactorFormSubmitHandler = (event) => {
  if (!validator.validate()) {
    event.preventDefault();
  }
};

export const addPictureRedactorValidateHandler = () => {
  pictureRedactorForm.addEventListener('submit', pictureRedactorFormSubmitHandler);
};

export const removePictureRedactorValidateHandler = () => {
  pictureRedactorForm.removeEventListener('submit', pictureRedactorFormSubmitHandler);
};
