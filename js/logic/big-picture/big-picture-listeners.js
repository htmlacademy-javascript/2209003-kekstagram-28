import { closeBigPicture } from './big-picture.js';

const closingButton = document
  .querySelector('.big-picture')
  .querySelector('.big-picture__cancel');

const closingButtonClickHanlder = (event) => {
  event.preventDefault();

  closeBigPicture();

  closingButton.removeEventListener('click', closingButtonClickHanlder);
};

const documentKeydownHandler = (event) => {
  if (event.key.startsWith('Esc')) {
    event.preventDefault();

    closeBigPicture();

    document.removeEventListener('keydown', documentKeydownHandler);
  }
};

export const addBigPictureHandlers = () => {
  closingButton.addEventListener('click', closingButtonClickHanlder);
  document.addEventListener('keydown', documentKeydownHandler);
};
