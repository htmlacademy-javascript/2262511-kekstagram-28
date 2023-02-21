// Cтрока короче 20 символов
//имя_функции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
//имя_функции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
//имя_функции('проверяемая строка', 10); // false

const stringLength = (string, length) => string <= length;
stringLength ('проверяемая строка', 20);

// Строка является палиндромом
//имя_функции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
//имя_функции('ДовОд'); // true
// Это не палиндром
//имя_функции('Кекс');  // false

const wordPalindrom = (string) => {
  const lowerString = string.toLowerCase();
  let reverseString = '';
  for (let i = lowerString - 1; i >= 0; i --){
    reverseString += lowerString.at(i);
  }
  return lowerString === reverseString;
};
wordPalindrom (' Довод');
//имя_функции('2023 год');            // 2023
//имя_функции('ECMAScript 2022');     // 2022
//имя_функции('1 кефир, 0.5 батона'); // 105
//имя_функции('агент 007');           // 7
//имя_функции('а я томат');           // NaN

const numberFromString = (string) => {
  let result= '';
   for (let i = 0; i < string.length; i++){
    if (!Number.isNaN(parseInt (string.at(i),10)));
    result += string.at(i);

   }
}
return parseInt (result, 10);

// Добавочный символ использован один раз
//имя_функции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
//имя_функции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
//имя_функции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
//имя_функции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
//имя_функции('qwerty', 4, '0'); // 'qwerty'

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0){
    return string;
  }
}
return pad.slice(0, actualPad % pad.length) +
pad.repeat (actualPad/pad.length) + string;
