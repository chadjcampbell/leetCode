type ValidTypes = string | number | boolean | null;

function jsonToMatrix(arr: any[]): ValidTypes[] {
  let keySet = new Set();

  for (const obj of arr) {
    getKeys(obj, "");
  }
  const keys: any[] = Array.from(keySet).sort();
  const result: [any][any] = [keys];

  for (const obj of arr) {
    const keyToVal = {};
    getValues(obj, "", keyToVal);
    let row: ValidTypes[] = [];
    for (const key of keys) {
      if (key in keyToVal) {
        row.push(keyToVal[key]);
      } else {
        row.push("");
      }
    }
    result.push(row);
  }

  return result;

  function getKeys(obj: any[], path: string) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(obj[key])) {
        getKeys(obj[key], newPath);
      } else {
        keySet.add(newPath);
      }
    }
  }

  function getValues(
    obj: { [x: string]: any },
    path: string,
    keyToVal: { [x: string]: any }
  ) {
    for (const key in obj) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(obj[key])) {
        getValues(obj[key], newPath, keyToVal);
      } else {
        keyToVal[newPath] = obj[key];
      }
    }
  }

  function isObject(obj: any) {
    return obj !== null && typeof obj === "object";
  }
}
