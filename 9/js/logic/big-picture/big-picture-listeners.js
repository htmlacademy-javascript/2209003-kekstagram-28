import { closeBigPicture } from './big-picture.js';

const closingButton = document
  .querySelector('.big-picture')
  .querySelector('.big-picture__cancel');

const closingButtonClickHandler = (event) => {
  event.preventDefault();

  closeBigPicture();
};

const documentKeydownHandler = (event) => {
  if (event.key.startsWith('Esc')) {
    event.preventDefault();

    closeBigPicture();
  }
};

export const addBigPictureHandlers = () => {
  closingButton.addEventListener('click', closingButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

export const removeBigPictureHandlers = () => {
  closingButton.removeEventListener('click', closingButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};
