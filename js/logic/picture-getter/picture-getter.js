const pictureInput = document.querySelector('.img-upload__input');

const handlePictureGetterClick = (event, handleFileCallback) => {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  event.preventDefault();

  handleFileCallback(file);
};

const handlePictureGetterChange = (event, handleFileCallback) => {
  handleFileCallback(event.target.files[0]);
};

export const addPictureGetterHandlers = (handleFileCallback) => {
  const pictureGetterClickHandler = (event) => {
    handlePictureGetterClick(event, handleFileCallback);
  };

  const pictureGetterChangeHandler = (event) => {
    handlePictureGetterChange(event, handleFileCallback);
  };

  // remove previous handlers (if there are)
  pictureInput.removeEventListener('click', pictureGetterClickHandler);
  pictureInput.removeEventListener('change', pictureGetterChangeHandler);

  pictureInput.addEventListener('click', pictureGetterClickHandler);
  pictureInput.addEventListener('change', pictureGetterChangeHandler);
};
