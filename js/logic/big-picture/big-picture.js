import { createUserComment } from './big-picture-comment.js';
import { addBigPictureHandlers } from './big-picture-listeners.js';

const bigPicture = document.querySelector('.big-picture');
const image = bigPicture.querySelector('.big-picture__img img');
const descriptionContainer = bigPicture.querySelector('.social__caption');
const likesContainer = bigPicture.querySelector('.likes-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsCountContainer = bigPicture.querySelector('.comments-count');

const fillBigPicture = ({ url, description, likes, comments }) => {
  image.src = url;
  descriptionContainer.textContent = description;
  likesContainer.textContent = likes;
  commentsCountContainer.textContent = comments.length;
  commentsContainer.replaceChildren(...comments.map(createUserComment));

  // should be removed in the future!
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
};

export const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

export const openBigPicture = (photoData) => {
  fillBigPicture(photoData);
  addBigPictureHandlers();

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};
