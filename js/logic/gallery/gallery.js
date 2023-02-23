import { createPicture } from './gallery-picture.js';
import { addPicturesContainerClickHandler } from './gallery-listeners.js';

import { photos } from '../../data/photos.js';

const picturesContainer = document.querySelector('.pictures');

let picturesClickHandler = null;

const removePicturesClickHandler = () => {
  picturesContainer.removeEventListener('click', picturesClickHandler);
};

export const renderGalleryPhotos = (clickPicturesCallback) => {
  if (picturesClickHandler) {
    removePicturesClickHandler();
  }

  if (clickPicturesCallback) {
    picturesClickHandler = (event) => (
      addPicturesContainerClickHandler(event, clickPicturesCallback)
    );

    picturesContainer.addEventListener('click', picturesClickHandler);
  }

  picturesContainer.append(...photos.map(createPicture));
};
