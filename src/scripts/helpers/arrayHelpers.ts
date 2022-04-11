function getArrayOfLength(length: number): Array<number> {
  return Array.from({ length }, (v, i) => i);
}

export {
  getArrayOfLength,
}