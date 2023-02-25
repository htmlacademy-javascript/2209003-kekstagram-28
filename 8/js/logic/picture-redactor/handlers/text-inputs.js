import { addModalKeydownHandler, removeModalKeydownHandler } from './modal.js';

const inputsContainer = document.querySelector('.img-upload__text');
const hashtagsInput = inputsContainer.querySelector('.text__hashtags');
const commentInput = inputsContainer.querySelector('.text__description');
const inputs = [hashtagsInput, commentInput];

const textInputFocusHandler = () => {
  removeModalKeydownHandler();
};

const textInputBlurHandler = () => {
  addModalKeydownHandler();
};

export const addTextInputsHandlers = () => {
  inputs.forEach((input) => {
    input.addEventListener('focus', textInputFocusHandler);
    input.addEventListener('blur', textInputBlurHandler);
  });
};

export const removeTextInputsHandlers = () => {
  inputs.forEach((input) => {
    input.removeEventListener('focus', textInputFocusHandler);
    input.removeEventListener('blur', textInputBlurHandler);
  });
};
