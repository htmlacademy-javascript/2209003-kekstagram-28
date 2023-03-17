import { fillUserComments, removeLoadingButtonClickHandler } from './comment/index.js';
import {
  addBigPictureHandlers,
  removeBigPictureHandlers,
} from './handlers.js';

const START_COMMENTS_COUNT = 5;
const NEW_COMMENTS_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const image = bigPicture.querySelector('.big-picture__img img');
const descriptionContainer = bigPicture.querySelector('.social__caption');
const likesContainer = bigPicture.querySelector('.likes-count');

const fillBigPicture = ({ url, description, likes, comments, style = '' }) => {
  image.src = url;
  image.style = style;
  descriptionContainer.textContent = description;
  likesContainer.textContent = likes;

  fillUserComments(comments, START_COMMENTS_COUNT, NEW_COMMENTS_COUNT);
};

export const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  removeBigPictureHandlers();
  removeLoadingButtonClickHandler();
};

export const openBigPicture = (photoData) => {
  fillBigPicture(photoData);
  addBigPictureHandlers();

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};
