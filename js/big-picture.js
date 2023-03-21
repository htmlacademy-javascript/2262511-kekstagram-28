import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentList = bigPicture.querySelector('.social__comments');
const commentListItem = bigPicture.querySelector('.social__comment');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const userModalCloseElement = bigPicture.querySelector('.cancel');
const body = document.querySelector('body');


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
  const count = 5;
  if(comments.length <= count) {
    commentsCount.textContent = `${commentList.children.length} из ${commentList.children.length} комментариев`;
    commentsLoader.classList.add('hidden');
    commentsCount.classList.add('hidden');
  }
};

const renderPictureComments = ({url, description, likes}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
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
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  renderPictureComments(data);
  renderComments(data.comments);
  showComments(data.comments);
};


