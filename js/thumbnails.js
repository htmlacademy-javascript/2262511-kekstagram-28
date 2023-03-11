const templatePicture = document
 .querySelector('#picture')
 .content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const thumbnails = createThumbnail;

thumbnails.forEach(({url, comments, likes}) =>
const thumbnailElement = () => {
  const userPicture = templatePicture.cloneNode(true);
  userPicture.querySelector('.picture__img').src = picture.url;
  userPicture.querySelector('.picture__comments').textContent = picture.comments;
  userPicture.querySelector('picture__likes').textContent = picture.likes;

  return userPicture;
});
fragment.appendChild(userPicture);

