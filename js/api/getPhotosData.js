import { fetchData } from './fetchData.js';

const PHOTOS_URL = 'https://28.javascript.pages.academy/kekstagram/data';

export const getPhotosData = () => fetchData(PHOTOS_URL);
