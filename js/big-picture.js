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
const SHOW_COMMENT_STEP = 5;
const commentNumber = SHOW_COMMENT_STEP;

commentLoader.classList.add('hidden');
commentCount.classList.add('hidden');

const renderDataBigPicture = ({url, description, likes}) => {
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

const createCommentsCount = (count) => {
  const commentsCount = document.createElement('span');
  commentsCount.classList.add('.comments-count');
  commentsCount.textContent = count;
  return commentsCount;
};

const updateCommentsCount = (comments) => {
  const commentsCount = createCommentsCount(comments.length);
  commentCount.innerHTML = '';
  commentCount.append(`${Math.min(commentNumber,comments.length)} из `, commentsCount, ' комментариев');
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
  renderDataBigPicture(data);
  updateCommentsCount(data.comments);
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeydown);

};


