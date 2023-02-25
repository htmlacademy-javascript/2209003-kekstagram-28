import {
  getUniqueItems,
  isEqualByLength,
  isCorrectByLength,
} from '../../../helpers/items.js';

const MIN_HASHTAGS = 0;
const MAX_HASHTAGS = 5;
const HASHTAGS_REGEX = /^#[a-zа-яё\d]{1,19}$/i;
const INCORRECT_CHARS_REGEX = /[^#a-zа-яё\d]+/i;
const ErrorMessage = {
  lengthMessage: 'Хештегов не может быть больше пяти!',
  incorrectCharMessage: 'В хештегах можно использовать только цифры, русские или английские буквы!',
  incorrectHashtagMessage: 'Неправильный хештег (слово должно быть до 20 символов с решеткой)!',
  repeatHashtagsMessage: 'Не должно быть повторяющихся хештегов!',
};

const isCorrectHashtag = (hashtag) => HASHTAGS_REGEX.test(hashtag);

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
    return ErrorMessage.incorrectCharMessage;
  }

  const correctHashtags = hashtags.filter(isCorrectHashtag);

  if (!isEqualByLength(correctHashtags, hashtags)) {
    return ErrorMessage.incorrectHashtagMessage;
  }

  if (!isCorrectHashtagsByLength(correctHashtags)) {
    return ErrorMessage.lengthMessage;
  }

  const correctAndUniqueHashtags = getUniqueItems(correctHashtags);

  if (!isEqualByLength(correctAndUniqueHashtags, hashtags)) {
    return ErrorMessage.repeatHashtagsMessage;
  }
};
