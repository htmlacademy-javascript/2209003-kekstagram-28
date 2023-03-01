export const addDocumentEscapeKeydownHandler = (event, callback) => {
  if (event.key.startsWith('Esc')) {
    event.preventDefault();

    callback();
  }
};

export const addElementOutClickHandler = (event, element, callback) => {
  if (element.contains(event.target)) {
    return;
  }

  callback();
};
