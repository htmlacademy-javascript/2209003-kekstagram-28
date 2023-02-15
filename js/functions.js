// 1
const hasMinChars = (str, maxCount) => str.length <= maxCount;

hasMinChars('проверяемая строка', 20);
hasMinChars('проверяемая строка', 18);
hasMinChars('проверяемая строка', 10);

// 2
const isPalindrom = (str) => {
  const modifiedString = str.toLowerCase().replaceAll(' ', '');
  const reversedString = modifiedString.split('').reverse().join('');

  return reversedString === modifiedString;
};

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

// 3
const findAllNumbers = (str) => {
  const allNumbers = String(str).match(/\d/g)?.join('') || NaN;

  return Number(allNumbers);
};

findAllNumbers('2023 год');
findAllNumbers('ECMAScript 2022');
findAllNumbers('1 кефир, 0.5 батона');
findAllNumbers('а я томат');
findAllNumbers(2023);
findAllNumbers(-1);
findAllNumbers(1.5);

// 4
const myPadStart = (str, count, extraChars) => {
  let result = str;

  while (result.length < count) {
    const lastIndex = count - result.length;
    result = extraChars.slice(0, lastIndex) + result;
  }

  return result;
};

myPadStart('1', 2, '0');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');
myPadStart('qwerty', 4, '0');
