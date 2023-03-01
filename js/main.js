const NAME = [
  'Иван',
  'Дарья',
  'Джони',
  'Серёга',
  'Милана',
  'Александр',
  'Эдик',
  'Зоя',
];
const MESSAGE = [
  'Всё отлично!',
  'Как можно было поймать такой неудачный момент?!',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
];
export const SIMILAR_COMMENTS_COUNT = 25;
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
const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];
export const createComment = () => ({
  id: generatePhotoId(1, 25),
  url: `photos/${ generatePhotoId() }.jpg`,
  description: 'Без фильтров',
  likes:  getRandomInteger(15, 200),
  comments: [
    {
      id:generateCommentId (),
      avatar:`img/avatar${ generatePhotoId(1, 6) }.svg`,
      message:getRandomItem(MESSAGE),
      name:getRandomItem(NAME),
    },
    {
      id:generateCommentId (),
      avatar:`img/avatar${ generatePhotoId(1, 6) }.svg`,
      message:getRandomItem(MESSAGE),
      name: getRandomItem(NAME),
    }
  ],
});


