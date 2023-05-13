type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  let memo = {};
  return function (...args) {
    let argsString = [...args].toString();
    if (memo[argsString] !== undefined) {
      return memo[argsString];
    } else {
      let memoValue = fn(...args);
      memo[argsString] = memoValue;
      return memoValue;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
