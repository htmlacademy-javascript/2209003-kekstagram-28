import { getPhotos } from './gallery.js';

export const addPicturesContainerClickHandler = (event, clickPicturesCallback) => {
  const picture = event.target.closest('.picture');

  if (!picture) {
    return;
  }

  event.preventDefault();

  const photos = getPhotos();
  const id = Number(picture.dataset.id);
  clickPicturesCallback(photos?.find((photo) => photo.id === id));
};
