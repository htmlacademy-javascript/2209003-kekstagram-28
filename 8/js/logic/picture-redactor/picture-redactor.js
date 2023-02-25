import {
  addPictureRedactorModalHandlers,
  removePictureRedactorModalHandlers,
  addPictureRedactorValidateHandler,
  removePictureRedactorValidateHandler,
  addTextInputsHandlers,
  removeTextInputsHandlers,
} from './handlers/index.js';
import { getFileSrc } from '../../helpers/file.js';

const pictureRedactor = document.querySelector('.img-upload__overlay');
const bigPicture = pictureRedactor.querySelector('.img-upload__preview img');
const smallPictures = pictureRedactor.querySelectorAll('.effects__preview');
const pictureRedactorForm = document.querySelector('.img-upload__form');

const fillPictureRedactor = (file, callback) => {
  getFileSrc(file, (fileUrl) => {
    bigPicture.src = fileUrl;

    smallPictures.forEach((smallPicture) => {
      smallPicture.style.backgroundImage = `url("${fileUrl}")`;
    });

    callback();
  });
};

export const openPictureRedactor = (file) => {
  fillPictureRedactor(file, () => {
    addPictureRedactorModalHandlers();
    addPictureRedactorValidateHandler();
    addTextInputsHandlers();
    document.body.classList.add('modal-open');
    pictureRedactor.classList.remove('hidden');
  });
};

export const closePictureRedactor = () => {
  removePictureRedactorModalHandlers();
  removePictureRedactorValidateHandler();
  removeTextInputsHandlers();
  document.body.classList.remove('modal-open');
  pictureRedactor.classList.add('hidden');
  pictureRedactorForm.reset();
};
