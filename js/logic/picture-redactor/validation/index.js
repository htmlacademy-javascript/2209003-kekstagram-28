import { isCorrectHashtags, getHashtagsErrorMessage } from './hashtags.js';

const newPictureForm = document.querySelector('.img-upload__form');
const hashtagsInput = newPictureForm.querySelector('.text__hashtags');

const validator = new Pristine(newPictureForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form-validation__parent--error',
  successClass: 'form-validation__parent--success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form-validation__text-error'
});

validator.addValidator(hashtagsInput, isCorrectHashtags, getHashtagsErrorMessage);

export { validator };
