import { closeErrorMessage, getErrorMessageContainer } from './logic.js';
import {
  addDocumentEscapeKeydownHandler,
  addElementOutClickHandler,
} from '../../../helpers/handlers.js';

export const closingButtonClickHandler = (event) => {
  event.preventDefault();

  closeErrorMessage();
};

export const documentKeydownHandler = (event) => (
  addDocumentEscapeKeydownHandler(event, closeErrorMessage)
);

export const documentOutClickHandler = (event) => (
  addElementOutClickHandler(event, getErrorMessageContainer(), closeErrorMessage)
);
