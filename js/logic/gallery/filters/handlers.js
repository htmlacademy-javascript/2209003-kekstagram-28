import {
  showStartPhotos,
  showRandomPhotos,
  showDiscussedPhotos,
} from './logic.js';
import { debounce, throttle } from './../../../helpers/decorators.js';

const COUNT_RANDOM_PHOTOS = 10;
const ACTIVE_CLASS = 'img-filters__button--active';
const FILTER_CLICK_THROTTLE_TIME = 250;

const filtersContainer = document.querySelector('.img-filters');
const startPhotosButton = filtersContainer.querySelector('#filter-default');
const randomPhotosButton = filtersContainer.querySelector('#filter-random');
const discussedPhotosButton = filtersContainer.querySelector('#filter-discussed');
const defaultPhotosButton = filtersContainer
  .querySelector('img-filters__button--active') ?? startPhotosButton;

let activeFilter = defaultPhotosButton;
const setNewActiveFilter = (newFilter) => {
  // for click on repeated filter
  if (activeFilter === newFilter) {
    return;
  }

  activeFilter.classList.remove(ACTIVE_CLASS);
  newFilter.classList.add(ACTIVE_CLASS);
  activeFilter = newFilter;
};

const handleFilterClick = throttle((filter) => {
  // for click on repeated filter
  if (activeFilter === filter && filter !== randomPhotosButton) {
    return;
  }

  setNewActiveFilter(filter);

  switch (filter) {
    case startPhotosButton:
      debounce(showStartPhotos)();
      break;
    case randomPhotosButton:
      debounce(showRandomPhotos)(COUNT_RANDOM_PHOTOS);
      break;
    case discussedPhotosButton:
      debounce(showDiscussedPhotos)();
      break;
  }
}, FILTER_CLICK_THROTTLE_TIME);

const filtersContainerClickHandler = (event) => {
  const filter = event.target.closest('.img-filters__button');

  if (!filter) {
    return;
  }

  event.preventDefault();

  handleFilterClick(filter);
};

export const removeFiltersHandler = () => {
  filtersContainer.removeEventListener('click', filtersContainerClickHandler);
};

export const addFiltersHandler = () => {
  filtersContainer.addEventListener('click', filtersContainerClickHandler);
};
