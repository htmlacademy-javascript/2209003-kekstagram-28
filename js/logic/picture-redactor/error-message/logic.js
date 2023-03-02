import {
  closingButtonClickHandler,
  documentKeydownHandler,
  documentOutClickHandler,
} from './handlers.js';

const errorMessageTemplate = document
  .querySelector('#error')
  .content
  .querySelector('.error');

let errorMessage = null;
export const getErrorMessageContainer = () => (
  errorMessage?.querySelector('.error__inner')
);

const addHandlers = () => {
  document.addEventListener('click', documentOutClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  errorMessage
    .querySelector('.error__button')
    .addEventListener('click', closingButtonClickHandler);
};

const removeHandlers = () => {
  document.removeEventListener('click', documentOutClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

export const openErrorMessage = () => {
  errorMessage = errorMessageTemplate.cloneNode(true);
  addHandlers();
  document.body.appendChild(errorMessage);
};

export const closeErrorMessage = () => {
  removeHandlers();
  errorMessage.remove();
};
