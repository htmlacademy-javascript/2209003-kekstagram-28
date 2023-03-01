import { createPicture } from './gallery-picture.js';
import { addPicturesContainerClickHandler } from './gallery-listeners.js';
import { getPhotosData } from '../../api/getPhotosData.js';

const ERROR_MESSAGE_TIME = 3_000;
const ERROR_MESSAGE_TEXT = 'Не получилось скачать фотографии :( Подождите немного мы сейчас повторим запрос!';
const REPEATED_FETCH_TIME = 7_000;

const picturesContainer = document.querySelector('.pictures');
const errorContainer = document.querySelector('.error-message');
const errorMessage = errorContainer.querySelector('.error-message__text');

let photos = null;
export const getPhotos = () => photos;

let lastPicturesClickHandler = null;
const removePicturesClickHandler = () => {
  picturesContainer.removeEventListener('click', lastPicturesClickHandler);
};

export const renderGalleryPhotos = (clickPicturesCallback) => {
  getPhotosData()
    .then((photosData) => {
      photos = photosData;

      if (lastPicturesClickHandler) {
        removePicturesClickHandler();
      }

      if (clickPicturesCallback) {
        lastPicturesClickHandler = (event) => (
          addPicturesContainerClickHandler(event, clickPicturesCallback)
        );

        picturesContainer.addEventListener('click', lastPicturesClickHandler);
      }

      picturesContainer.append(...photos.map(createPicture));
    })
    .catch(() => {
      errorMessage.textContent = ERROR_MESSAGE_TEXT;
      errorContainer.hidden = false;

      setTimeout(() => {
        errorContainer.hidden = true;
      }, ERROR_MESSAGE_TIME);

      setTimeout(() => {
        renderGalleryPhotos(clickPicturesCallback);
      }, REPEATED_FETCH_TIME);
    });
};
