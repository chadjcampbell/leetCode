function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  let newArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
