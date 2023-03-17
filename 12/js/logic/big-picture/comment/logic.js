const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsInfoContainer = bigPicture.querySelector('.social__comment-count');
const commentsCurrentCountContainer = commentsInfoContainer.querySelector('.social__comment-current-count');
const commentsAllCountContainer = commentsInfoContainer.querySelector('.comments-count');
const loadingButton = bigPicture.querySelector('.social__comments-loader');

const COMMENTS_START_INDEX = 0;

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

let loadingButtonClickHandler = null;
export const removeLoadingButtonClickHandler = () => {
  loadingButton.removeEventListener('click', loadingButtonClickHandler);
};

const addNewComments = (comments, startIndex, commentsCount) => {
  const lastIndex = startIndex + commentsCount;

  commentsContainer.append(
    ...comments
      .slice(startIndex, lastIndex)
      .map(createUserComment)
  );

  if (lastIndex >= comments.length) {
    loadingButton.classList.add('hidden');
    removeLoadingButtonClickHandler();
  }
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
  newCommentsCount = Infinity,
) => {
  const commentsCount = comments.length;

  commentsCurrentCountContainer.textContent = startCount > commentsCount
    ? commentsCount
    : startCount;
  commentsAllCountContainer.textContent = commentsCount;
  commentsContainer.replaceChildren();

  if (comments.length === 0) {
    commentsInfoContainer.textContent = 'Нет комментариев';
    loadingButton.classList.add('hidden');

    return;
  }

  // for repeated call this function
  loadingButton.classList.remove('hidden');

  addNewComments(comments, COMMENTS_START_INDEX, startCount);
  addLoadingButtonClickHandler(comments, startCount, newCommentsCount);
};
