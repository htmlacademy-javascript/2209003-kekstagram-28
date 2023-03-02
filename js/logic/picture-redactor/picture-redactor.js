import { addDefaultHandlers, removeDefaultHandlers } from './handlers.js';
import { handleFileUrl } from '../../helpers/file.js';

const pictureRedactor = document.querySelector('.img-upload__overlay');
const bigPicture = pictureRedactor.querySelector('.img-upload__preview img');
const smallPictures = pictureRedactor.querySelectorAll('.effects__preview');
const pictureRedactorForm = document.querySelector('.img-upload__form');

const fillPictureRedactor = (file, callback) => {
  handleFileUrl(file, (fileUrl) => {
    bigPicture.src = fileUrl;

    smallPictures.forEach((smallPicture) => {
      smallPicture.style.backgroundImage = `url("${fileUrl}")`;
    });

    callback();
  });
};

export const openPictureRedactor = (file) => {
  if (!file) {
    return;
  }

  fillPictureRedactor(file, () => {
    addDefaultHandlers();
    document.body.classList.add('modal-open');
    pictureRedactor.classList.remove('hidden');
  });
};

export const closePictureRedactor = (willClear = true) => {
  removeDefaultHandlers();
  document.body.classList.remove('modal-open');
  pictureRedactor.classList.add('hidden');

  if (willClear) {
    pictureRedactorForm.reset();
  }
};
