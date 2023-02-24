

export const checkStringLength = (string, length) => string.length <= length;

export const wordPalindrom = (string) => {
  const lowerString = string.toLowerCase();
  let reverseString = '';
  for (let i = lowerString.length - 1; i >= 0; i --){
    reverseString += lowerString.at(i);
  }
  return lowerString === reverseString;
};


export const getNumberFromString = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if ((character !== ' ') && !Number.isNaN(+character)) {
      result = result + character;
    }
  }
  return (result.length > 0) ? Number(result) : NaN;
};
export const padStart = (string, minLength, extraLine) => {
  if (string.length >= minLength) {
    return string;
  }
  let result = string;
  while(result.length < minLength) {
    const diffLength = minLength - result.length;
    const slicedExtraLine = extraLine.slice(0, diffLength);
    result = slicedExtraLine + result;
  }
  return string;
};

