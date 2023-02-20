import { findPhoto } from './data/photos.js';

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closingButton = bigPicture.querySelector('.big-picture__cancel');

const createComment = ({ avatar: avatarSrc, name: username, message: userText }) => {
  const comment = document.querySelector('#user-comment')
    .content
    .querySelector('.social__comment')
    .cloneNode(true);

  const avatar = comment.querySelector('.social__picture');
  avatar.src = avatarSrc;
  avatar.alt = username;

  comment.querySelector('.social__text').textContent = userText;

  return comment;
};

const fillBigPicture = (photo) => {
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;

  const commentsFragment = document.createDocumentFragment();
  photo.comments.forEach((comment) => {
    commentsFragment.appendChild(createComment(comment));
  });

  const commentsContainer = bigPicture.querySelector('.social__comments');
  commentsContainer.replaceChildren(commentsFragment);

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

const clickClosingButtonHanlder = (event) => {
  event.preventDefault();

  closeBigPicture();

  closingButton.removeEventListener('click', clickClosingButtonHanlder);
};

const keydownDocumentHandler = (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();

    closeBigPicture();

    document.removeEventListener('keydown', keydownDocumentHandler);
  }
};

const addHandlersCloseBigPicture = () => {
  closingButton.addEventListener('click', clickClosingButtonHanlder);
  document.addEventListener('keydown', keydownDocumentHandler);
};

picturesContainer.addEventListener('click', (event) => {
  const picture = event.target.closest('.picture');

  if (!picture) {
    return;
  }

  event.preventDefault();

  const id = Number(picture.dataset.id);
  const photoData = findPhoto(id);
  fillBigPicture(photoData);

  addHandlersCloseBigPicture();

  openBigPicture();
});
