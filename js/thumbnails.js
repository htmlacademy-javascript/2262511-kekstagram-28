
import {createPictureArray} from './data.js';

const listPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const listPicturesFragment = document.createDocumentFragment();

export const similarPublishPhoto = createPictureArray(25);

similarPublishPhoto.forEach(({url, description, comments, likes, id}) => {
  const thumbnail = pictureTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').textContent = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;
  listPicturesFragment.appendChild(thumbnail);

  return thumbnail;

});

export const renderThumbnails = () => {
  listPictures.appendChild(listPicturesFragment);
};

