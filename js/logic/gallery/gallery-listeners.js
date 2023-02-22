import { findPhoto } from '../../data/photos.js';

export const picturesContainerClickHandler = (event, clickPicturesCallback) => {
  const pictureElement = event.target.closest('.picture');

  if (!pictureElement) {
    return;
  }

  event.preventDefault();

  if (!clickPicturesCallback) {
    return;
  }

  const id = Number(pictureElement.dataset.id);
  clickPicturesCallback(findPhoto(id));
};
