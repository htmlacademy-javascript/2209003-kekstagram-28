import { getCurrentPhotos } from './gallery.js';

const picturesContainer = document.querySelector('.pictures');

const handlePictureClick = (event, clickPicturesCallback) => {
  const picture = event.target.closest('.picture');

  if (!picture) {
    return;
  }

  event.preventDefault();

  const photos = getCurrentPhotos();
  const id = Number(picture.dataset.id);
  clickPicturesCallback(photos?.find((photo) => photo.id === id));
};

let picturesContainerClickHandler = null;
const updatePicturesContainerHandler = (newHandler) => {
  picturesContainerClickHandler = newHandler;
};

export const addPicturesContainerClickHandler = (clickPicturesCallback) => {
  const newPicturesContainerHandler = (event) => {
    handlePictureClick(event, clickPicturesCallback);
  };

  updatePicturesContainerHandler(newPicturesContainerHandler);

  picturesContainer.addEventListener('click', newPicturesContainerHandler);
};

export const removePicturesContainerClickHandler = () => {
  picturesContainer.addEventListener('click', picturesContainerClickHandler);
};
