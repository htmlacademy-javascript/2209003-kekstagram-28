import { createPicture, isPicture } from './pictures/index.js';
import {
  addPicturesContainerClickHandler,
  removePicturesContainerClickHandler,
} from './gallery-listeners.js';
import { getPhotosData } from '../../api/get-photos-data.js';
import { showFilters } from './filters/index.js';
import { getIdGenerator } from '../../helpers/id.js';

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
const addNewPhoto = ({
  id,
  url = '',
  likes = 0,
  comments = [],
  description = '',
  style = '',
}) => {
  if (currentPhotos === null) {
    currentPhotos = [];
  }

  currentPhotos.push({
    id,
    url,
    likes,
    comments,
    description,
    style,
  });
};

const getNewPhotosFromServer = async () => {
  try {
    return await getPhotosData();
  } catch (_error) {
    errorMessage.textContent = ERROR_MESSAGE_TEXT;
    errorContainer.hidden = false;

    return [];
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

const getNewPhotoId = getIdGenerator('/new-photos');
export const addNewPhotoInGallery = (photoSettings) => {
  const newPhotoId = getNewPhotoId();

  addNewPhoto({ id: newPhotoId, ...photoSettings });
  picturesContainer.appendChild(
    createPicture(getCurrentPhotos().find((photos) => photos.id === newPhotoId))
  );
};

export const renderGalleryPhotos = async (clickPicturesCallback) => {
  const newPhotos = await getNewPhotosFromServer();

  if (newPhotos.length === 0) {
    return;
  }

  // remove if old handler there is and after add new
  removePicturesContainerClickHandler();
  addPicturesContainerClickHandler(clickPicturesCallback);

  renderPhotos(newPhotos);

  updateCurrentPhotos(newPhotos);

  showFilters();
};
