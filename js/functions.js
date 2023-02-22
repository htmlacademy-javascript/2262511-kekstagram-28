// Cтрока короче 20 символов
//имя_функции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
//имя_функции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
//имя_функции('проверяемая строка', 10); // false

const checkStringLength = (string, length) => string.length <= length;

const isPalindrom = (string) => {
  const lowerString = string.toLowerCase();

  let reverseString = '';

  for (let i = lowerString.length - 1; i >= 0; i--) {
    reverseString = reverseString + lowerString[i];
  }

  return reverseString === lowerString;
};

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

const getNumberFromString = (string) => {
  let result= '';

   for (let i = 0; i < string.length; i++) {
     const character = string[i];

      if ((character !== ' ') && !Number.isNaN(+character)) {
        result = result + character;
      }
   }

   return (result.length > 0) ? Number(result) : NaN;
}

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

const padStart = (string, minLength, extraLine) => {
  if (string.length <= minLength) {
    return string;
  }

  let result = string;

  while(result.length < minLength) {
    // '1', 2, '0'
    const diffLength = minLength - result.length; // 1
    const slicedExtraLine = extraLine.slice(0, diffLength); // '0'.slice(0, 1) --> '0'
    console.log(slicedExtraLine, result)
    result = slicedExtraLine + result; // 'weq' // 'wweq'
  }



  return result;
  // return pad.slice(0, actualPad % pad.length) + pad.repeat (actualPad/pad.length) + string;
}

padStart('1', 2, '0');
