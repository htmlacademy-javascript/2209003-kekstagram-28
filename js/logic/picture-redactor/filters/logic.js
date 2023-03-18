import { Filters, SliderSettings } from './mock.js';

const DEFAULT_FILTER = Filters.NONE;

const parent = document.querySelector('.img-upload__overlay');
const sliderParent = parent.querySelector('.effect-level');
const slider = sliderParent.querySelector('.effect-level__slider');
const filterLevel = sliderParent.querySelector('.effect-level__value');
const image = parent.querySelector('.img-upload__preview img');
const filterItems = parent.querySelectorAll('.effects__radio');

export const getCssFilterValue = (filterName, filterLevelValue) => {
  switch (filterName) {
    case Filters.CHROME:
      return `grayscale(${filterLevelValue})`;
    case Filters.SEPIA:
      return `sepia(${filterLevelValue})`;
    case Filters.MARVIN:
      return `invert(${filterLevelValue}%)`;
    case Filters.PHOBOS:
      return `blur(${filterLevelValue}px)`;
    case Filters.HEAT:
      return `brightness(${filterLevelValue})`;
    default:
      return '';
  }
};

const setImageCssFilter = (filterName, filterLevelValue) => {
  image.style.filter = getCssFilterValue(filterName, filterLevelValue);
};

const setActiveFilterItem = (filterName) => {
  for (const filterItem of filterItems) {
    if (filterItem.value === filterName) {
      filterItem.checked = true;
      return;
    }
  }
};

const getFilterLevelValue = () => filterLevel.value;

let currentFilter;
export const setNewFilter = (newFilterName) => {
  currentFilter = newFilterName;
  setActiveFilterItem(currentFilter);
  setImageCssFilter(currentFilter, getFilterLevelValue());

  if (currentFilter === Filters.NONE) {
    sliderParent.hidden = true;
    image.className = '';
    filterLevel.value = '';

    return;
  }

  sliderParent.hidden = false;
  image.className = `effects__preview--${currentFilter}`;
  slider.noUiSlider.updateOptions(SliderSettings[currentFilter]);
};

const sliderUpdateHandler = () => {
  filterLevel.value = slider.noUiSlider.get();
  setImageCssFilter(currentFilter, getFilterLevelValue());
};

export const createSlider = () => {
  noUiSlider.create(slider, SliderSettings[DEFAULT_FILTER]);
  setNewFilter(DEFAULT_FILTER);
  slider.noUiSlider.on('update', sliderUpdateHandler);
};

export const destroySlider = () => {
  slider.noUiSlider.destroy();
};
