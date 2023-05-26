type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  let result: MultiDimensionalArray = [];

  function flatDepth(array: MultiDimensionalArray, depth: number) {
    for (const value of array) {
      if (Array.isArray(value) && depth < n) {
        flatDepth(value, depth + 1);
      } else {
        result.push(value);
      }
    }
    return result;
  }

  return flatDepth(arr, 0);
};
