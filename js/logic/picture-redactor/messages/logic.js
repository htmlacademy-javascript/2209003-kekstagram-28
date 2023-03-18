import {
  messageClosingButtonClickHandler,
  documentKeydownHandler,
  handleMessageOutClick,
} from './handlers.js';

const MessageType = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const successMessageTemplate = document
  .querySelector('#success')
  .content
  .querySelector('.success');

const errorMessageTemplate = document
  .querySelector('#error')
  .content
  .querySelector('.error');

const messageToTemplate = {
  [MessageType.SUCCESS]: successMessageTemplate,
  [MessageType.ERROR]: errorMessageTemplate,
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

let callbackAfterCloseMessage = null;
const updateCallbackAfterCloseMessage = (newCallback) => {
  callbackAfterCloseMessage = newCallback;
};
const resetCallbackAfterCloseMessage = () => {
  callbackAfterCloseMessage = null;
};

const openMessage = (messageName, callbackAfterClose) => {
  const newMessage = messageToTemplate[messageName].cloneNode(true);

  updateCallbackAfterCloseMessage(callbackAfterClose);

  addMessage(newMessage);
};

export const openSuccessMessage = (callbackAfterClose) => {
  openMessage(MessageType.SUCCESS, callbackAfterClose);
};

export const openErrorMessage = (callbackAfterClose) => {
  openMessage(MessageType.ERROR, callbackAfterClose);
};

export const closeMessage = () => {
  removeHandlers();
  callbackAfterCloseMessage?.();
  resetCallbackAfterCloseMessage();
  document.body.classList.remove('modal-open');

  removeMessage();
};
