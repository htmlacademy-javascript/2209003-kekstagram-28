import {
  messageClosingButtonClickHandler,
  documentKeydownHandler,
  handleMessageOutClick,
} from './handlers.js';

const successMessageTemplate = document
  .querySelector('#success')
  .content
  .querySelector('.success');

const errorMessageTemplate = document
  .querySelector('#error')
  .content
  .querySelector('.error');

const MESSAGES_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const MESSAGES_TEMPLATES = {
  [MESSAGES_TYPES.SUCCESS]: successMessageTemplate,
  [MESSAGES_TYPES.ERROR]: errorMessageTemplate,
};

let currentMessage = null;
const updateCurrentMessage = (newMessage) => {
  currentMessage = newMessage;
};

const messageOutClickHandler = (event) => {
  const messageContent = currentMessage.querySelector('[data-message-content]');

  handleMessageOutClick(event, messageContent);
};

const addHandlers = () => {
  const closingButton = currentMessage.querySelector('button[data-message-closing-button]');

  closingButton.addEventListener('click', messageClosingButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.body.addEventListener('click', messageOutClickHandler);
};

const addMessage = (newMessage) => {
  updateCurrentMessage(newMessage);

  addHandlers(currentMessage);
  document.body.classList.add('modal-open');

  document.body.appendChild(currentMessage);
};

const removeHandlers = () => {
  document.removeEventListener('keydown', documentKeydownHandler);
  document.body.removeEventListener('click', messageOutClickHandler);
};

const removeMessage = () => {
  currentMessage.remove();
  currentMessage = null;
};

export const closeMessage = () => {
  removeHandlers();
  document.body.classList.remove('modal-open');

  removeMessage();
};

const openMessage = (messageName) => {
  const newMessage = MESSAGES_TEMPLATES[messageName].cloneNode(true);

  addMessage(newMessage);
};

export const openSuccessMessage = () => {
  openMessage(MESSAGES_TYPES.SUCCESS);
};

export const openErrorMessage = () => {
  openMessage(MESSAGES_TYPES.ERROR);
};
