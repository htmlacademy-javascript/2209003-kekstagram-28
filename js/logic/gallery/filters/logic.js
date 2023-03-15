import {
  removeFiltersHandler,
  addFiltersHandler,
} from './handlers.js';
import { getCurrentPhotos, renderPhotos } from '../gallery.js';
import { getRandomItems } from '../../../helpers/random.js';

const filtersContainer = document.querySelector('.img-filters');

export const showDefaultPhotos = () => {
  const photos = getCurrentPhotos();

  renderPhotos(photos);
};

export const showRandomPhotos = (photosCount) => {
  const photos = getCurrentPhotos();
  const randomPhotos = getRandomItems(photos, photosCount);

  renderPhotos(randomPhotos);
};

const comparePhotosByDiscussed = (firstPhoto, secondPhoto) => (
  secondPhoto.comments.length - firstPhoto.comments.length
);

export const showDiscussedPhotos = () => {
  const photos = getCurrentPhotos().slice();

  renderPhotos(photos.sort(comparePhotosByDiscussed));
};

export const showFilters = () => {
  removeFiltersHandler();
  addFiltersHandler();

  filtersContainer.classList.remove('img-filters--inactive');
};
