import {
  closeSuccessMessage,
  getSuccessMessageContainer,
} from './logic.js';

import {
  addDocumentEscapeKeydownHandler,
  addElementOutClickHandler,
} from '../../../helpers/handlers.js';

export const closingButtonClickHandler = (event) => {
  event.preventDefault();

  closeSuccessMessage();
};

export const documentKeydownHandler = (event) => (
  addDocumentEscapeKeydownHandler(event, closeSuccessMessage)
);

export const documentOutClickHandler = (event) => (
  addElementOutClickHandler(
    event,
    getSuccessMessageContainer(),
    closeSuccessMessage
  )
);
