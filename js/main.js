// raw data
const DESCRIPTIONS = [
  'Крутяк',
  'Прикольно',
  'Необычно',
  'Невероятно',
  'Необыкновенно',
  'Оригинально',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Вася',
  'Саша',
  'Никита',
  'Валера',
  'Гоша',
  'Жора',
];

// helpers
const getIdGenerator = () => {
  let id = 1;
  return () => id++;
};

const getRandomIntegerNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const getRandomIndexElement = (items) => (
  getRandomIntegerNumber(0, items.length - 1)
);

const getRandomElement = (items) => (
  items[getRandomIndexElement(items)]
);

const getRandomElements = (items, count = 1) => {
  const indexes = [];

  while ((indexes.length < count) && (items.length !== indexes.length)) {
    const randomIndex = getRandomIndexElement(items);

    if (indexes.includes(randomIndex)) {
      continue;
    }

    indexes.push(randomIndex);
  }

  return indexes.map((index) => items[index]);
};

const createElements = (creater, count) => (
  Array.from({ length: count }, creater)
);

// comments
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

const comments = createElements(createComment, COUNT_OF_COMMENTS);

// photos
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

// eslint-disable-next-line no-unused-vars
const photos = createElements(createPhoto, COUNT_OF_PHOTOS);
