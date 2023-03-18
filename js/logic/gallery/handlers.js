import { getCurrentPhotos } from './logic.js';

const picturesContainer = document.querySelector('.pictures');

const handlePictureClick = (event, clickPicturesCallback) => {
  const picture = event.target.closest('.picture');

  if (!picture) {
    return;
  }

  event.preventDefault();

  const photos = getCurrentPhotos();
  const id = picture.dataset.id;
  clickPicturesCallback(photos?.find((photo) => String(photo.id) === id));
};

let picturesContainerClickHandler = null;
const updatePicturesContainerHandler = (newHandler) => {
  picturesContainerClickHandler = newHandler;
};

export const addPicturesContainerClickHandler = (clickPicturesCallback) => {
  updatePicturesContainerHandler((event) => {
    handlePictureClick(event, clickPicturesCallback);
  });

  picturesContainer.addEventListener('click', picturesContainerClickHandler);
};

export const removePicturesContainerClickHandler = () => {
  picturesContainer.addEventListener('click', picturesContainerClickHandler);
};
