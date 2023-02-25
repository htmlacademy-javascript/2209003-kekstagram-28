import {
  getUniqueItems,
  isEqualByLength,
  isCorrectByLength,
} from '../../../helpers/items.js';

const MIN_HASHTAGS = 0;
const MAX_HASHTAGS = 5;
const HASHTAG_REGEX = /^#[a-zа-яё\d]{1,19}$/i;
const INCORRECT_CHARS_REGEX = /[^#a-zа-яё\d]+/i;
const ErrorMessage = {
  length: 'Хештегов не может быть больше пяти!',
  incorrectChar: 'В хештегах можно использовать только цифры, русские или английские буквы!',
  incorrectHashtag: 'Неправильный хештег (слово должно быть до 20 символов с решеткой)!',
  repeatHashtags: 'Не должно быть повторяющихся хештегов!',
  unknown: 'Неверно введены хештеги!',
};

const isCorrectHashtag = (hashtag) => HASHTAG_REGEX.test(hashtag);

const getTransformHashtags = (hashtags) => (
  hashtags
    .split(' ')
    .filter((substring) => Boolean(substring))
);

const isCorrectHashtagsByLength = (hashtags) => (
  isCorrectByLength(hashtags, MIN_HASHTAGS, MAX_HASHTAGS)
);

export const isCorrectHashtags = (value) => {
  if (!value) {
    return true;
  }

  const hashtags = getTransformHashtags(value);

  const correctHashtags = getUniqueItems(
    hashtags.filter(isCorrectHashtag)
  );

  return isCorrectHashtagsByLength(correctHashtags)
    && isEqualByLength(correctHashtags, hashtags);
};

export const getHashtagsErrorMessage = (value) => {
  const hashtags = getTransformHashtags(value);

  if (INCORRECT_CHARS_REGEX.test(hashtags.join(''))) {
    return ErrorMessage.incorrectChar;
  }

  const correctHashtags = hashtags.filter(isCorrectHashtag);

  if (!isEqualByLength(correctHashtags, hashtags)) {
    return ErrorMessage.incorrectHashtag;
  }

  if (!isCorrectHashtagsByLength(correctHashtags)) {
    return ErrorMessage.length;
  }

  const correctAndUniqueHashtags = getUniqueItems(correctHashtags);

  if (!isEqualByLength(correctAndUniqueHashtags, hashtags)) {
    return ErrorMessage.repeatHashtags;
  }

  return ErrorMessage.unknown;
};
