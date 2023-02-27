import { Filters, SliderSettings } from './mock.js';

const DEFAULT_FILTER = Filters.NONE;

const parent = document.querySelector('.img-upload__overlay');
const sliderParent = parent.querySelector('.effect-level');
const slider = sliderParent.querySelector('.effect-level__slider');
const filterLevel = sliderParent.querySelector('.effect-level__value');
const image = parent.querySelector('.img-upload__preview img');

const setImageCssFilter = (filterName, filterLevelValue) => {
  let imageFilter = '';

  switch (filterName) {
    case Filters.CHROME:
      imageFilter = `grayscale(${filterLevelValue})`;
      break;
    case Filters.SEPIA:
      imageFilter = `sepia(${filterLevelValue})`;
      break;
    case Filters.MARVIN:
      imageFilter = `invert(${filterLevelValue}%)`;
      break;
    case Filters.PHOBOS:
      imageFilter = `blur(${filterLevelValue}px)`;
      break;
    case Filters.HEAT:
      imageFilter = `brightness(${filterLevelValue})`;
      break;
    default:
      imageFilter = '';
      break;
  }

  image.style.filter = imageFilter;
};

const getFilterLevelValue = () => filterLevel.value;

let currentFilter;
export const setNewFilter = (newFilterName) => {
  currentFilter = newFilterName;
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
