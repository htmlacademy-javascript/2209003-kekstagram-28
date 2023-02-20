import { photos } from './data/photos.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictures = document.createDocumentFragment();

photos.forEach(({ id, url, likes, comments }) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.dataset.id = id;

  pictures.appendChild(picture);
});

picturesContainer.appendChild(pictures);
