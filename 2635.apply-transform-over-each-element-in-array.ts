function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let newArr: number[] = [];
  for (let j = 0; j < arr.length; j++) {
    newArr.push(fn(arr[j], j));
  }
  return newArr;
}
