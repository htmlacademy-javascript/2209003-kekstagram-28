import { fetchData } from './fetchData.js';

const PHOTO_URL = 'https://28.javascript.pages.academy/kekstagram';

export const sendPhotoData = (data) => fetchData(PHOTO_URL, {
  method: 'POST',
  body: data,
});
