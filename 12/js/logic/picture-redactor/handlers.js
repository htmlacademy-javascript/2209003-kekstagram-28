// modal listeners
import {
  addPictureRedactorModalHandlers,
  removePictureRedactorModalHandlers,
} from './modal/index.js';

// form listeners
import {
  addPictureRedactorValidateHandler,
  removePictureRedactorValidateHandler,
} from './form/index.js';

// text inputs
import {
  addTextInputsHandlers,
  removeTextInputsHandlers,
} from './text-inputs/index.js';

// size control
import {
  addChangingSizeHandlers,
  removeChangingSizeHandlers,
} from './changing-size/index.js';

// filters
import {
  addFiltersHandlers,
  removeFiltersHandlers,
} from './filters/index.js';

export const addDefaultHandlers = () => {
  addPictureRedactorModalHandlers();
  addPictureRedactorValidateHandler();
  addTextInputsHandlers();
  addChangingSizeHandlers();
  addFiltersHandlers();
};

export const removeDefaultHandlers = () => {
  removePictureRedactorModalHandlers();
  removePictureRedactorValidateHandler();
  removeTextInputsHandlers();
  removeChangingSizeHandlers();
  removeFiltersHandlers();
};
