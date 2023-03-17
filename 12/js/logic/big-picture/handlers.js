import { closeBigPicture } from './logic.js';
import { handleAddDocumentEscapeKeydown } from '../../helpers/handlers.js';

const closingButton = document
  .querySelector('.big-picture')
  .querySelector('.big-picture__cancel');

const closingButtonClickHandler = (event) => {
  event.preventDefault();

  closeBigPicture();
};

const documentKeydownHandler = (event) => (
  handleAddDocumentEscapeKeydown(event, closeBigPicture)
);

export const addBigPictureHandlers = () => {
  closingButton.addEventListener('click', closingButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

export const removeBigPictureHandlers = () => {
  closingButton.removeEventListener('click', closingButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};
