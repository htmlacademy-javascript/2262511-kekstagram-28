const NAMES = [
  'Иван',
  'Дарья',
  'Джони',
  'Серёга',
  'Милана',
  'Александр',
  'Эдик',
  'Зоя',
];

const DESCRIPTIONS = [
  'Без фильтров',
  'Была хорошая погода',
  'Море волнуется раз!',
  'Звездное небо',
  'Вот такие пироги',
  'Дураки, дороги...',
  'Дело было вечером',
];

const MESSAGES = [
  'Всё отлично!',
  'Как можно было поймать такой неудачный момент?!',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
];

const COMMENTS_MIN = 1;
const COMMENTS_MAX = 25;
export const PUBLISHED_PHOTO_COUNT = 25;

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
function createIdGenerator () {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();
const createPublishedPhoto = (items) => items[getRandomInteger(0, items.length - 1)];

const createComment = () => ({
  id: generateCommentId(),
  url: `photos/${ generatePhotoId() }.jpg`,
  message: createPublishedPhoto(MESSAGES),
  likes: getRandomInteger(15, 200),
  name: getRandomInteger(NAMES),
});

export const createUserPost = () => ({
  id: generatePhotoId(1, 25),
  url: `photos/${ generatePhotoId() }.jpg`,
  description: createPublishedPhoto(DESCRIPTIONS),
  likes:  getRandomInteger(15, 200),
  comments: Array.from(
    {length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX)},
    createComment
  ),
});


