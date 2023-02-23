import { findPhoto } from '../../data/photos.js';

export const addPicturesContainerClickHandler = (event, clickPicturesCallback) => {
  const picture = event.target.closest('.picture');

  if (!picture) {
    return;
  }

  event.preventDefault();

  const id = Number(picture.dataset.id);
  clickPicturesCallback(findPhoto(id));
};
