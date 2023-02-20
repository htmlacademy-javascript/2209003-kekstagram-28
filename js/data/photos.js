import {
  getRandomIntegerNumber,
  getRandomElement,
  getRandomElements,
} from '../helpers/random.js';
import { getIdGenerator } from '../helpers/id.js';
import { createElements } from '../helpers/creater.js';

import { comments } from './comments.js';
import { DESCRIPTIONS } from './../mock/descriptions.js';

const COUNT_OF_PHOTOS = 25;

const createPhotoUrl = (id) => `photos/${id}.jpg`;

const getPhotoId = getIdGenerator();
const createPhoto = () => {
  const photoId = getPhotoId();

  return {
    id: photoId,
    url: createPhotoUrl(photoId),
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomIntegerNumber(15, 200),
    comments: getRandomElements(
      comments,
      getRandomIntegerNumber(1, 3),
    ),
  };
};

export const photos = createElements(createPhoto, COUNT_OF_PHOTOS);

export const findPhoto = (id) => photos.find((photo) => photo.id === id);
