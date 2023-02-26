import { renderGalleryPhotos } from './logic/gallery/index.js';
import { openBigPicture } from './logic/big-picture/index.js';

import { addPictureGetterChangeHandler } from './logic/picture-getter/index.js';
import { openPictureRedactor } from './logic/picture-redactor/index.js';

renderGalleryPhotos((photoData) => {
  openBigPicture(photoData);
});

addPictureGetterChangeHandler((file) => {
  openPictureRedactor(file);
});
