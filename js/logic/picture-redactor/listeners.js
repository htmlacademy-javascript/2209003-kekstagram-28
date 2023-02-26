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
  addChangingSizeListeners,
  removeChangingSizeListeners,
} from './changing-size/index.js';

export const addDefaultListeners = () => {
  addPictureRedactorModalHandlers();
  addPictureRedactorValidateHandler();
  addTextInputsHandlers();
  addChangingSizeListeners();
};

export const removeDefaultListeners = () => {
  removePictureRedactorModalHandlers();
  removePictureRedactorValidateHandler();
  removeTextInputsHandlers();
  removeChangingSizeListeners();
};
