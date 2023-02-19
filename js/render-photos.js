import { photos } from './data/photos.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictures = document.createDocumentFragment();

photos.forEach(({ url, likes, comments }) => {
  const picture = pictureTemplate.cloneNode(true);

  const image = picture.querySelector('.picture__img');
  image.src = url;

  const likesContainer = picture.querySelector('.picture__likes');
  likesContainer.textContent = likes;

  const commentsContainer = picture.querySelector('.picture__comments');
  commentsContainer.textContent = comments.length;

  pictures.append(picture);
});

picturesContainer.append(pictures);
