const templatePicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');


const createThumbnails = ({url, description, comments, likes}) => {
  const userPicture = templatePicture.cloneNode(true);
  const picture = userPicture.querySelector('.picture__img');
  picture.alt = description;
  picture.src = url;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  userPicture.querySelector('.picture__likes').textContent = likes;
  userPicture.querySelector('.picture__img').alt = description;

  return userPicture;
};

export const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const userPicture = createThumbnails (picture);
    fragment.append(userPicture);
  });
  pictureContainer.append(fragment);
};

