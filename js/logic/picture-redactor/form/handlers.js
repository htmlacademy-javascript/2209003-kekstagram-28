import { closePictureRedactor } from '../logic.js';
import { validator } from './validate.js';
import { sendPhotoData } from '../../../api/send-photo-data.js';
import { openSuccessMessage, openErrorMessage } from '../messages/index.js';
import { transformFormData } from './logic.js';

const pictureRedactorForm = document.querySelector('.img-upload__form');
const submittingButton = pictureRedactorForm.querySelector('.img-upload__submit');

let callbackAfterSuccessFormSubmit = null;
export const addCallbackAfterSuccessFormSubmit = (newCallback) => {
  callbackAfterSuccessFormSubmit = newCallback;
};
const resetCallbackAfterSuccessFormSubmit = () => {
  callbackAfterSuccessFormSubmit = null;
};

const pictureRedactorFormSubmitHandler = (event) => {
  event.preventDefault();

  if (validator.validate()) {
    const data = new FormData(pictureRedactorForm);
    submittingButton.disabled = true;
    sendPhotoData(data)
      .then(() => {
        callbackAfterSuccessFormSubmit?.(transformFormData(data));
        resetCallbackAfterSuccessFormSubmit();

        closePictureRedactor();
        openSuccessMessage();
      })
      .catch(() => {
        openErrorMessage();
      })
      .finally(() => {
        submittingButton.disabled = false;
      });
  }
};

export const addPictureRedactorValidateHandler = () => {
  pictureRedactorForm.addEventListener('submit', pictureRedactorFormSubmitHandler);
};

export const removePictureRedactorValidateHandler = () => {
  pictureRedactorForm.removeEventListener('submit', pictureRedactorFormSubmitHandler);
  validator.reset();
};
