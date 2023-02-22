const userCommentTemplate = document.querySelector('#user-comment')
  .content
  .querySelector('.social__comment');

export const createUserCommentElement = ({
  avatar: avatarSrc,
  name: username,
  message: userText,
}) => {
  const userCommentElement = userCommentTemplate.cloneNode(true);

  const avatar = userCommentElement.querySelector('.social__picture');
  avatar.src = avatarSrc;
  avatar.alt = username;

  userCommentElement.querySelector('.social__text').textContent = userText;

  return userCommentElement;
};
