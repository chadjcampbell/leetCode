function objDiff(obj1: any, obj2: any): any {
  let newObj = {};

  for (const key in obj1) {
    if (key in obj2) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        newObj[key] = arrDiff(obj1[key], obj2[key]);
        continue;
      }
      if (obj1[key] !== obj2[key]) {
        newObj[key] = [obj1[key], obj2[key]];
      }
    }
  }

  return newObj;
}

function arrDiff(arr1: any[], arr2: any[]) {
  let newArr: any[] = [];
  for (const elem of arr1) {
    if (elem in arr2) {
      continue;
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
}
