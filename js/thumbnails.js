
import {createPictureArray, PUBLISHED_PHOTO_COUNT} from './data.js';


const templatePicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const templatePictureFragment = document.createDocumentFragment();

export const similarPublishPhoto = createPictureArray(PUBLISHED_PHOTO_COUNT);

similarPublishPhoto.forEach(({url, description, comments, likes, id}) => {
  const thumbnail = templatePicture.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').textContent = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;
  templatePictureFragment.appendChild(thumbnail);

});

export const renderThumbnails = () => {
  pictureContainer.appendChild(templatePictureFragment);
};

