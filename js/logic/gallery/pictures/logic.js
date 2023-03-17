const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

export const createPicture = ({ id, url, likes, comments, style = '' }) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureImage = picture.querySelector('.picture__img');

  picture.dataset.id = id;
  pictureImage.src = url;
  pictureImage.style = style;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;

  return picture;
};

export const isPicture = (picture) => picture.classList.contains('picture');
