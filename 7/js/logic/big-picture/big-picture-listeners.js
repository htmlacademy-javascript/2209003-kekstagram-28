import { closeBigPicture } from './big-picture.js';

const closingButton = document
  .querySelector('.big-picture')
  .querySelector('.big-picture__cancel');

const closingButtonClickHandler = (event) => {
  event.preventDefault();

  closeBigPicture();

  closingButton.removeEventListener('click', closingButtonClickHandler);
};

const documentKeydownHandler = (event) => {
  if (event.key.startsWith('Esc')) {
    event.preventDefault();

    closeBigPicture();

    document.removeEventListener('keydown', documentKeydownHandler);
  }
};

export const addBigPictureHandlers = () => {
  closingButton.addEventListener('click', closingButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};
