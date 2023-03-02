const START_SIZE = 100;
const SIZE_DIFFERENCE = 25;
const MIN_SIZE = 25;
const MAX_SIZE = 100;

const controlParent = document.querySelector('.scale');
const changingSizeInput = controlParent.querySelector('.scale__control--value');
const decreasingButton = controlParent.querySelector('.scale__control--smaller');
const increasingButton = controlParent.querySelector('.scale__control--bigger');
const image = document.querySelector('.img-upload__preview img');

const transformPercentToNumber = (percent) => parseInt(percent, 10);
const transformNumberToPercent = (number) => `${number}%`;
const changeImageSize = (coefficient) => (
  image.style.transform = `scale(${coefficient})`
);
const clearImageSize = () => {
  changeImageSize(START_SIZE / 100);
};

const decreasingButtonClickHandler = () => {
  const sizeValue = transformPercentToNumber(changingSizeInput.value);

  if (sizeValue <= MIN_SIZE) {
    return;
  }

  const newSizeValue = sizeValue - SIZE_DIFFERENCE;
  changeImageSize(newSizeValue / 100);
  changingSizeInput.value = transformNumberToPercent(newSizeValue);
};

const increasingButtonClickHandler = () => {
  const sizeValue = transformPercentToNumber(changingSizeInput.value);

  if (sizeValue >= MAX_SIZE) {
    return;
  }

  const newSizeValue = sizeValue + SIZE_DIFFERENCE;
  changeImageSize(newSizeValue / 100);
  changingSizeInput.value = transformNumberToPercent(newSizeValue);
};

export const addChangingSizeHandlers = () => {
  changingSizeInput.value = transformNumberToPercent(START_SIZE);
  changeImageSize(START_SIZE / 100);

  decreasingButton.addEventListener('click', decreasingButtonClickHandler);
  increasingButton.addEventListener('click', increasingButtonClickHandler);
};

export const removeChangingSizeHandlers = () => {
  clearImageSize();
  decreasingButton.removeEventListener('click', decreasingButtonClickHandler);
  increasingButton.removeEventListener('click', increasingButtonClickHandler);
};
