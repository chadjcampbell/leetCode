declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  let result = {};

  this.forEach((element) => {
    const key = fn(element);
    if (key in result) {
      result[key].push(element);
    } else {
      result[key] = [element];
    }
  });

  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
