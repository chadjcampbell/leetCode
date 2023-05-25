function objDiff(obj1: any, obj2: any): any {
  if (!isObject(obj1) && !isObject(obj2)) {
    //both primitive
    return obj1 === obj2 ? {} : [obj1, obj2];
  }
  if (!isObject(obj1) || !isObject(obj2)) {
    // one primitive
    return [obj1, obj2];
  }
  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    // one array, one object
    return [obj1, obj2];
  }
  let newObj = {};
  //both arr, or both obj, use recursion
  for (const key in obj1) {
    //only compare common keys
    if (key in obj2) {
      const diff = objDiff(obj1[key], obj2[key]);
      if (Object.keys(diff).length > 0) {
        newObj[key] = diff;
      }
    }
  }

  function isObject(obj: any) {
    return obj !== null && typeof obj === "object";
  }

  return newObj;
}
