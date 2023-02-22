import { renderGalleryPhotos } from './logic/gallery/index.js';
import { openBigPicture } from './logic/big-picture/index.js';

renderGalleryPhotos((photoData) => {
  openBigPicture(photoData);
});
