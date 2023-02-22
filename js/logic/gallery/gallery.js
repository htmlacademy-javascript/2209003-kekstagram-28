import { createPictureElement } from './gallery-picture.js';
import { picturesContainerClickHandler } from './gallery-listeners.js';

import { photos } from '../../data/photos.js';

const picturesContainer = document.querySelector('.pictures');

export const renderGalleryPhotos = (clickPicturesCallback) => {
  picturesContainer.addEventListener(
    'click',
    (event) => picturesContainerClickHandler(event, clickPicturesCallback),
  );

  picturesContainer.append(...photos.map(createPictureElement));
};
