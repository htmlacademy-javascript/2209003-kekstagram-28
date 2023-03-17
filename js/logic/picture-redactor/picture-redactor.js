import { addDefaultHandlers, removeDefaultHandlers } from './handlers.js';
import { addCallbackAfterSuccessFormSubmit } from './form/handlers.js';

const pictureRedactor = document.querySelector('.img-upload__overlay');
const bigPicture = pictureRedactor.querySelector('.img-upload__preview img');
const smallPictures = pictureRedactor.querySelectorAll('.effects__preview');
const pictureRedactorForm = document.querySelector('.img-upload__form');

let fileUrl = null;
const updateFileUrl = (file) => {
  fileUrl = URL.createObjectURL(file);
};
const resetFileUrl = () => {
  URL.revokeObjectURL(fileUrl);
  fileUrl = null;
};

const fillPictureRedactor = (file) => {
  updateFileUrl(file);
  bigPicture.src = fileUrl;

  smallPictures.forEach((smallPicture) => {
    smallPicture.style.backgroundImage = `url("${fileUrl}")`;
  });
};

export const openPictureRedactor = (file, callbackAfterClose) => {
  fillPictureRedactor(file);
  addDefaultHandlers();
  addCallbackAfterSuccessFormSubmit(callbackAfterClose);
  document.body.classList.add('modal-open');
  pictureRedactor.classList.remove('hidden');
};

export const closePictureRedactor = (willClear = true) => {
  removeDefaultHandlers();
  document.body.classList.remove('modal-open');
  pictureRedactor.classList.add('hidden');

  if (willClear) {
    pictureRedactorForm.reset();
  }

  resetFileUrl();
};
