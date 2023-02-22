const userCommentTemplate = document.querySelector('#user-comment')
  .content
  .querySelector('.social__comment');

export const createUserComment = ({
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
