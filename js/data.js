import {getRandomInteger} from './util.js';
import {createIdGenerator} from './util.js';

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

const COUNT_MIN = 1;
const COUNT_MAX = 25;
export const PUBLISHED_PHOTO_COUNT = 25;

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();
const generateAvatar = createIdGenerator();
const generateUrl = createIdGenerator();
const createPublishedPhoto = (items) => items[getRandomInteger(0, items.length - 1)];

const createComment = () => ({
  id: generateCommentId,
  avatar: `img/avatar${ generateAvatar }.jpg`,
  message: createPublishedPhoto(MESSAGES),
  name: getRandomInteger(NAMES),
});

const createUserPost = () => ({
  id: generatePhotoId(COUNT_MIN, COUNT_MAX),
  url: `photos/${ generateUrl(COUNT_MIN, COUNT_MAX) }.jpg`,
  description: createPublishedPhoto(DESCRIPTIONS),
  likes:  getRandomInteger(15, 200),
  comments: Array.from(
    {length: getRandomInteger(COUNT_MIN, COUNT_MAX)},
    createComment,
  ),
});

export const createPictureArray = () => Array.from({length:PUBLISHED_PHOTO_COUNT},
  createUserPost,
);


