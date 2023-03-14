export const handleAddDocumentEscapeKeydown = (event, callback) => {
  if (event.key.startsWith('Esc')) {
    event.preventDefault();

    callback();
  }
};

export const handleAddElementOutClick = (event, element, callback) => {
  if (element.contains(event.target)) {
    return;
  }

  callback();
};
