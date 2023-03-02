import { closePictureRedactor } from '../picture-redactor.js';
import { addDocumentEscapeKeydownHandler } from '../../../helpers/handlers.js';

const closingButton = document.querySelector('.img-upload__cancel');

const documentKeydownHandler = (event) => (
  addDocumentEscapeKeydownHandler(event, closePictureRedactor)
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

