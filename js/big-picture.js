import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentList = bigPicture.querySelector('.social__comments');
const commentListItem = bigPicture.querySelector('.social__comment');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const userModalCloseElement = bigPicture.querySelector('.cancel');
const body = document.querySelector('body');
const urlPicture = bigPicture.querySelector('.big-picture__img img');
const captionPicture = bigPicture.querySelector('.social__caption');
const likesPicture = bigPicture.querySelector('.likes-count');

const renderAvatarComment = ({url, description, likes}) => {
  urlPicture.src = url;
  captionPicture.textContent = description;
  likesPicture.textContent = likes;
};

const renderComments = (comments) => {
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    const newComment = commentListItem.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__text').textContent = comment.message;
    newComment.querySelector('.social__picture').alt = comment.name;
    commentList.append(newComment);
  });
};

const showComments = (comments) => {
  const commentNumber = 5;
  const createSpanElement = document.createElement('span');
  createSpanElement.classList.add('.comments-count');
  createSpanElement.textContent = commentCount;

  if(comments.length <= commentNumber) {
    commentCount.append(`${commentList.children.length} из`, createSpanElement, `${commentList.children.length} комментариев`);
    commentLoader.classList.add('hidden');
    commentCount.classList.add('hidden');
  }
};

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
}

userModalCloseElement.addEventListener('click', closeUserModal);

export const showBigPicture = (data) => {
  renderComments(data.comments);
  renderAvatarComment(data);
  showComments(data.comments);
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  commentCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
};


