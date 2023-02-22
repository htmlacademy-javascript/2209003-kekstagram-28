const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

export const createPictureElement = ({ id, url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.dataset.id = id;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  return pictureElement;
};
