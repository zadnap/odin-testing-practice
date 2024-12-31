function analyzeArray(array) {
  if (array.some((element) => typeof element !== "number"))
    throw new Error("Array elements must be numbers");

  const max = Math.max(...array);
  const min = Math.min(...array);
  const average = array.reduce((sum, num) => sum + num, 0) / array.length;

  return {
    average,
    min,
    max,
    length: array.length,
  };
}

export default analyzeArray;
