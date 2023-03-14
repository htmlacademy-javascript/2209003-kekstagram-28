import { closeMessage } from './logic.js';
import {
  handleAddDocumentEscapeKeydown,
  handleAddElementOutClick,
} from '../../../helpers/handlers.js';

export const messageClosingButtonClickHandler = (event) => {
  event.preventDefault();

  closeMessage();
};

export const documentKeydownHandler = (event) => {
  handleAddDocumentEscapeKeydown(event, closeMessage);
};

export const handleMessageOutClick = (event, container) => {
  handleAddElementOutClick(event, container, closeMessage);
};
