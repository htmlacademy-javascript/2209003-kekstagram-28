import { closePictureRedactor } from '../logic.js';
import { handleAddDocumentEscapeKeydown } from '../../../helpers/handlers.js';

const closingButton = document.querySelector('.img-upload__cancel');

const documentKeydownHandler = (event) => (
  handleAddDocumentEscapeKeydown(event, closePictureRedactor)
);

const closingButtonClickHandler = () => closePictureRedactor();

export const addModalKeydownHandler = () => {
  document.addEventListener('keydown', documentKeydownHandler);
};

export const removeModalKeydownHandler = () => {
  document.removeEventListener('keydown', documentKeydownHandler);
};

export const addPictureRedactorModalHandlers = () => {
  addModalKeydownHandler();
  closingButton.addEventListener('click', closingButtonClickHandler);
};

export const removePictureRedactorModalHandlers = () => {
  removeModalKeydownHandler();
  closingButton.removeEventListener('click', closingButtonClickHandler);
};

