import { findPhoto } from './data/photos.js';

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const buttonForClosing = bigPicture.querySelector('.big-picture__cancel');

const createComment = (avatarSrc, username, text) => {
  const image = document.createElement('img');
  image.classList.add('social__picture');
  image.src = avatarSrc;
  image.alt = username;
  image.width = 35;
  image.height = 35;

  const paragraph = document.createElement('p');
  paragraph.classList.add('social__text');
  paragraph.textContent = text;

  const container = document.createElement('li');
  container.classList.add('social__comment');
  container.appendChild(image);
  container.appendChild(paragraph);

  return container;
};

const fillBigPicture = (data) => {
  bigPicture.querySelector('.big-picture__img img').src = data.url;
  bigPicture.querySelector('.social__caption').textContent = data.description;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;

  const commentsFragment = document.createDocumentFragment();
  data.comments.forEach((comment) => {
    commentsFragment.appendChild(createComment(
      comment.avatar,
      comment.name,
      comment.message,
    ));
  });

  const commentsContainer = bigPicture.querySelector('.social__comments');
  commentsContainer.textContent = '';
  commentsContainer.appendChild(commentsFragment);

  // should be removed in the future!
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
};

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const clickButtonForClosingHanlder = (event) => {
  event.preventDefault();

  closeBigPicture();

  buttonForClosing.removeEventListener('click', clickButtonForClosingHanlder);
};

const keydownBigPictureHandler = (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();

    closeBigPicture();

    document.removeEventListener('keydown', keydownBigPictureHandler);
  }
};

const addHandlersForClosingBigPicture = () => {
  buttonForClosing.addEventListener('click', clickButtonForClosingHanlder);
  document.addEventListener('keydown', keydownBigPictureHandler);
};

picturesContainer.addEventListener('click', (event) => {
  const picture = event.target.closest('.picture');

  if (!picture) {
    return;
  }

  event.preventDefault();

  const id = Number(picture.querySelector('.id').textContent);
  const photoData = findPhoto(id);
  fillBigPicture(photoData);

  addHandlersForClosingBigPicture();

  openBigPicture();
});
