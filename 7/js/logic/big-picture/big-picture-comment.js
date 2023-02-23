const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsInfoContainer = bigPicture.querySelector('.social__comment-count');
const commentsCurrentCountContainer = commentsInfoContainer.querySelector('.social__comment-current-count');
const commentsAllCountContainer = commentsInfoContainer.querySelector('.comments-count');
const loadingButton = bigPicture.querySelector('.social__comments-loader');

const userCommentTemplate = document.querySelector('#user-comment')
  .content
  .querySelector('.social__comment');

const createUserComment = ({
  avatar: avatarSrc,
  name: username,
  message: userText,
}) => {
  const userComment = userCommentTemplate.cloneNode(true);

  const avatar = userComment.querySelector('.social__picture');
  avatar.src = avatarSrc;
  avatar.alt = username;

  userComment.querySelector('.social__text').textContent = userText;

  return userComment;
};

const addNewComments = (comments, startIndex, commentsCount) => {
  commentsContainer.append(
    ...comments
      .slice(startIndex, startIndex + commentsCount)
      .map(createUserComment)
  );
};

let loadingButtonClickHandler = null;

export const removeLoadingButtonClickHandler = () => {
  loadingButton.removeEventListener('click', loadingButtonClickHandler);
};

const addLoadingButtonClickHandler = (comments, startIndex, commentsCount) => {
  if (loadingButtonClickHandler) {
    removeLoadingButtonClickHandler();
  }

  loadingButtonClickHandler = () => {
    addNewComments(comments, startIndex, commentsCount);

    startIndex += commentsCount;
    startIndex = (startIndex > comments.length) ? comments.length : startIndex;

    commentsCurrentCountContainer.textContent = startIndex;
  };

  loadingButton.addEventListener('click', loadingButtonClickHandler);
};

export const fillUserComments = (
  comments,
  startCount = 5,
  newCommentsCount = Infinity
) => {
  commentsCurrentCountContainer.textContent = startCount;
  commentsAllCountContainer.textContent = comments.length;
  commentsContainer.replaceChildren();

  addNewComments(comments, 0, startCount);
  addLoadingButtonClickHandler(comments, startCount, newCommentsCount);
};
