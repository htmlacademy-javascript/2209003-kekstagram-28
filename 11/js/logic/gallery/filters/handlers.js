import {
  showDefaultPhotos,
  showRandomPhotos,
  showDiscussedPhotos,
} from './logic.js';
import { debounce } from './../../../helpers/decorators.js';

const COUNT_RANDOM_PHOTOS = 10;
const ACTIVE_CLASS = 'img-filters__button--active';

const filtersContainer = document.querySelector('.img-filters');
const filters = filtersContainer.querySelectorAll('.img-filters__button');
const defaultPhotosButton = filtersContainer.querySelector('#filter-default');
const randomPhotosButton = filtersContainer.querySelector('#filter-random');
const discussedPhotosButton = filtersContainer.querySelector('#filter-discussed');

const isActiveFilter = (filter) => filter.classList.contains(ACTIVE_CLASS);

const cleanAllFilters = () => {
  filters.forEach((filter) => {
    filter.classList.remove(ACTIVE_CLASS);
  });
};

const handleFilterClick = (filter) => {
  switch (filter) {
    case defaultPhotosButton:
      debounce(showDefaultPhotos)();
      break;
    case randomPhotosButton:
      debounce(showRandomPhotos)(COUNT_RANDOM_PHOTOS);
      break;
    case discussedPhotosButton:
      debounce(showDiscussedPhotos)();
      break;
  }
};

const filtersContainerClickHandler = (event) => {
  const filter = event.target.closest('.img-filters__button');

  if (!filter || isActiveFilter(filter)) {
    return;
  }

  event.preventDefault();

  cleanAllFilters();
  filter.classList.add(ACTIVE_CLASS);

  handleFilterClick(filter);
};

export const removeFiltersHandler = () => {
  filtersContainer.removeEventListener('click', filtersContainerClickHandler);
};

export const addFiltersHandler = () => {
  filtersContainer.addEventListener('click', filtersContainerClickHandler);
};
