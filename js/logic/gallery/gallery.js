import { createPicture, isPicture } from './pictures/index.js';
import {
  addPicturesContainerClickHandler,
  removePicturesContainerClickHandler,
} from './gallery-listeners.js';
import { getPhotosData } from '../../api/get-photos-data.js';
import { showFilters } from './filters/index.js';

const ERROR_MESSAGE_TEXT = `
  Не получилось скачать фотографии :(
  Попробуйте перезагрузить страницу или же вернитесь позже
`;
const picturesContainer = document.querySelector('.pictures');
const errorContainer = document.querySelector('.error-message');
const errorMessage = errorContainer.querySelector('.error-message__text');

let currentPhotos = null;
const updateCurrentPhotos = (newPhotos) => {
  currentPhotos = newPhotos;
};
export const getCurrentPhotos = () => currentPhotos;

const getNewPhotos = async () => {
  try {
    return await getPhotosData();
  } catch (_error) {
    errorMessage.textContent = ERROR_MESSAGE_TEXT;
    errorContainer.hidden = false;
  }
};

const removeAllPicture = () => {
  picturesContainer.querySelectorAll('section > *').forEach((element) => {
    if (isPicture(element)) {
      element.remove();
    }
  });
};

export const renderPhotos = (newPhotos) => {
  removeAllPicture();
  picturesContainer.append(...newPhotos.map(createPicture));
};

export const renderGalleryPhotos = async (clickPicturesCallback) => {
  const newPhotos = await getNewPhotos();

  // remove if old handler there is and after add new
  removePicturesContainerClickHandler();
  addPicturesContainerClickHandler(clickPicturesCallback);

  renderPhotos(newPhotos);

  updateCurrentPhotos(newPhotos);

  showFilters();
};
