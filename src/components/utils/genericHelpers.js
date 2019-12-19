export function getRandomInt({ lowerBound = 1, upperBound }) {
  return Math.floor(Math.random() * upperBound + lowerBound);
}

export function getArrayOfRandomLength({ minLength, maxLength }) {
  const randomInt = getRandomInt({ lowerBound: minLength, upperBound: maxLength });
  let mappableArray = [];

  for (let i = 0; i < randomInt - 1; i++) {
    mappableArray.push(i);
  }

  return mappableArray;
}
