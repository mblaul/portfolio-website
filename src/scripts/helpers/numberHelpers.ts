function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomDecimal({ max = 100, min = 1 }: { max?: number, min?: number }): number {
  return Math.floor(Math.random() * (max - min) + 100) / 10;
}

export {
  getRandomInt,
  getRandomDecimal,
};