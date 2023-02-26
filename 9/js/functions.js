// 1
const isCorrectByMaxLength = (text, maxLength) => {
  let length = 0;

  for (const char of text) {
    // checking start of surrogate couple
    if (char.charCodeAt(0) !== char.codePointAt(0)) {
      continue;
    }

    ++length;
  }

  return length <= maxLength;
};

isCorrectByMaxLength('проверяемая строка', 20);
isCorrectByMaxLength('проверяемая стро𝒳𝒳', 18);
isCorrectByMaxLength('проверяемая строка', 10);

// 2
const isPalindrome = (text) => {
  const clearedText = text.toLowerCase().replaceAll(' ', '');
  const reversedText = clearedText.split('').reverse().join('');

  return reversedText === clearedText;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

// 3
const findAllNumbers = (text) => {
  const allNumbers = String(text).match(/\d/g)?.join('') ?? NaN;

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
const addCharsAtStart = (string, count, extraChars) => {
  let result = string;

  while (result.length < count) {
    const lastIndex = count - result.length;
    result = extraChars.slice(0, lastIndex) + result;
  }

  return result;
};

addCharsAtStart('1', 2, '0');
addCharsAtStart('1', 4, '0');
addCharsAtStart('q', 4, 'werty');
addCharsAtStart('q', 4, 'we');
addCharsAtStart('qwerty', 4, '0');
