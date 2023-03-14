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

const messagesTemplates = {
  'success': successMessageTemplate,
  'error': errorMessageTemplate,
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

// messageName should equal keys of messagesTemplates!
export const openMessages = (messageName) => {
  const newMessage = messagesTemplates[messageName].cloneNode(true);

  addMessage(newMessage);
};
