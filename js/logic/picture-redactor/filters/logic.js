import { SliderSettings } from './mock.js';

const DEFAULT_FILTER = 'none';

const parent = document.querySelector('.img-upload__overlay');
const sliderParent = parent.querySelector('.effect-level');
const slider = sliderParent.querySelector('.effect-level__slider');
const filterLevel = sliderParent.querySelector('.effect-level__value');
const image = parent.querySelector('.img-upload__preview img');

const setImageCssFilter = (filterName, filterLevelValue) => {
  let imageFilter = '';

  switch (filterName) {
    case 'chrome':
      imageFilter = `grayscale(${filterLevelValue})`;
      break;
    case 'sepia':
      imageFilter = `sepia(${filterLevelValue})`;
      break;
    case 'marvin':
      imageFilter = `invert(${filterLevelValue}%)`;
      break;
    case 'phobos':
      imageFilter = `blur(${filterLevelValue}px)`;
      break;
    case 'heat':
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

  if (currentFilter === 'none') {
    sliderParent.hidden = true;
    image.className = '';
    filterLevel.value = '';

    return;
  }

  sliderParent.hidden = false;
  image.className = `effects__preview--${currentFilter}`;
  slider.noUiSlider.updateOptions(SliderSettings[currentFilter.toUpperCase()]);
};

const sliderUpdateHandler = () => {
  filterLevel.value = slider.noUiSlider.get();
  setImageCssFilter(currentFilter, getFilterLevelValue());
};

export const createSlider = () => {
  noUiSlider.create(slider, SliderSettings.DEFAULT);
  setNewFilter(DEFAULT_FILTER);
  slider.noUiSlider.on('update', sliderUpdateHandler);
};

export const destroySlider = () => {
  slider.noUiSlider.destroy();
};
