import { getRandomIntegerNumber, getRandomElement } from '../helpers/random.js';
import { getIdGenerator } from '../helpers/id.js';
import { createElements } from '../helpers/creater.js';

import { MESSAGES } from './../mock/messages.js';
import { NAMES } from './../mock/names.js';

const COUNT_OF_COMMENTS = 25;

const createAvatarUrl = (min, max) => (
  `img/avatar-${getRandomIntegerNumber(min, max)}.svg`
);

const getCommentId = getIdGenerator();
const createComment = () => {
  const commentId = getCommentId();

  return {
    id: commentId,
    avatar: createAvatarUrl(1, 6),
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  };
};

export const comments = createElements(createComment, COUNT_OF_COMMENTS);
