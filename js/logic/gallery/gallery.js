import { createPicture } from './gallery-picture.js';
import { addPicturesContainerClickHandler } from './gallery-listeners.js';

import { photos } from '../../data/photos.js';

const picturesContainer = document.querySelector('.pictures');

let lastPicturesHandler = null;

export const renderGalleryPhotos = (clickPicturesCallback) => {
  if (lastPicturesHandler) {
    picturesContainer.removeEventListener('click', lastPicturesHandler);
  }

  if (clickPicturesCallback) {
    lastPicturesHandler = (event) => (
      addPicturesContainerClickHandler(event, clickPicturesCallback)
    );

    picturesContainer.addEventListener('click', lastPicturesHandler);
  }

  picturesContainer.append(...photos.map(createPicture));
};
