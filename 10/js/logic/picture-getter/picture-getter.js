const pictureInput = document.querySelector('.img-upload__input');

const pictureInputUpdateHandler = (event, handleFile) => {
  handleFile(event.target.files[0]);
};

const pictureInputClickHandler = (event, handleFile) => {
  const file = event.target.files[0];

  if (file) {
    event.preventDefault();
  }

  handleFile(file);
};

export const addPictureGetterHandlers = (handleFile) => {
  pictureInput.onchange = (event) => pictureInputUpdateHandler(event, handleFile);
  pictureInput.onclick = (event) => pictureInputClickHandler(event, handleFile);
};
