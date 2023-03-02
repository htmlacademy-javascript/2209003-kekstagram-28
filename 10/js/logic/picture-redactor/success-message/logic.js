import {
  closingButtonClickHandler,
  documentKeydownHandler,
  documentOutClickHandler,
} from './handlers.js';

const successMessageTemplate = document
  .querySelector('#success')
  .content
  .querySelector('.success');

let successMessage = null;
export const getSuccessMessageContainer = () => (
  successMessage?.querySelector('.success__inner')
);

const addHandlers = () => {
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentOutClickHandler);
  successMessage
    .querySelector('.success__button')
    .addEventListener('click', closingButtonClickHandler);
};

const removeHandlers = () => {
  document.removeEventListener('keydown', documentKeydownHandler);
  document.removeEventListener('click', documentOutClickHandler);
};

export const closeSuccessMessage = () => {
  removeHandlers();
  successMessage.remove();
};

export const openSuccessMessage = () => {
  successMessage = successMessageTemplate.cloneNode(true);
  addHandlers();
  document.body.appendChild(successMessage);
};
