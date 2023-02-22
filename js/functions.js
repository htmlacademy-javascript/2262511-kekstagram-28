

const checkStringLength = (string, length) => string.length <= length;

const isPalindrom = (string) => {
  const lowerString = string.toLowerCase();

  let reverseString = '';

  for (let i = lowerString.length - 1; i >= 0; i--) {
    reverseString = reverseString + lowerString[i];
  }

  return reverseString === lowerString;
};


const wordPalindrom = (string) => {
  const lowerString = string.toLowerCase();
  let reverseString = '';
  for (let i = lowerString - 1; i >= 0; i --){
    reverseString += lowerString.at(i);
  }
  return lowerString === reverseString;
};
wordPalindrom (' Довод');


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
