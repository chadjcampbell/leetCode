function chunk(arr: any[], size: number): any[][] {
  let result: any[][] = [];
  let rollingIndex = 0;
  while (rollingIndex < arr.length) {
    let currentChunk: any[] = [];
    for (let i = 0; i < size; i++) {
      if (arr[rollingIndex] !== undefined) {
        currentChunk.push(arr[rollingIndex++]);
      }
    }
    result.push(currentChunk);
  }
  return result;
}
