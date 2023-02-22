import { createUserCommentElement } from './big-picture-comment.js';
import { addBigPictureHandlers } from './big-picture-listeners.js';

const bigPictureElement = document.querySelector('.big-picture');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const descriptionContainer = bigPictureElement.querySelector('.social__caption');
const likesContainer = bigPictureElement.querySelector('.likes-count');
const commentsContainer = bigPictureElement.querySelector('.social__comments');
const commentsCountContainer = bigPictureElement.querySelector('.comments-count');

const fillBigPicture = ({ url, description, likes, comments }) => {
  imageElement.src = url;
  descriptionContainer.textContent = description;
  likesContainer.textContent = likes;
  commentsCountContainer.textContent = comments.length;
  commentsContainer.replaceChildren(...comments.map(createUserCommentElement));

  // should be removed in the future!
  bigPictureElement.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureElement.querySelector('.comments-loader').classList.add('hidden');
};

export const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

export const openBigPicture = (photoData) => {
  fillBigPicture(photoData);
  addBigPictureHandlers();

  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
};
