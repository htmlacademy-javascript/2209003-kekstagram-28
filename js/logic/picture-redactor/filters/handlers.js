import {
  createSlider,
  destroySlider,
  setNewFilter,
} from './logic.js';

const filtersParent = document.querySelector('.effects__list');

const filtersParentClickHandler = (event) => {
  const item = event.target.closest('.effects__item');

  if (!item) {
    return;
  }

  const filterName = item.querySelector('input[name="effect"]').value;

  setNewFilter(filterName);
};

export const addFiltersHandlers = () => {
  createSlider();
  filtersParent.addEventListener('click', filtersParentClickHandler);
};

export const removeFiltersHandlers = () => {
  destroySlider();
  filtersParent.removeEventListener('click', filtersParentClickHandler);
};
