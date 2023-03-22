import {showBigPicture} from './big-picture.js';
import {renderThumbnails} from './thumbnails.js';
import {PUBLISHED_PHOTO_COUNT} from './data.js';


const container = document.querySelector('.pictures');

export const renderGallery = () => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');
    if (!thumbnail) {
      return;
    }
    const picture = PUBLISHED_PHOTO_COUNT.find(
      (item) => item.id === Number(thumbnail.dataset.thumbnailId)
    );
    showBigPicture(picture);
  });
  renderThumbnails();
};

