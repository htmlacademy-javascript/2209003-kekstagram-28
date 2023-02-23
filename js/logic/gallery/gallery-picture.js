const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

export const createPicture = ({ id, url, likes, comments }) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.dataset.id = id;
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;

  return picture;
};
