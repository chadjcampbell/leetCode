type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
  let tempArgs: any[] | null = null;
  let throttled = false;

  return function (...args) {
    if (!throttled) {
      throttled = true;
      setTimeout(delay, t);
      return fn(...args);
    } else {
      tempArgs = [...args];
    }

    function delay() {
      throttled = false;
      if (tempArgs) {
        throttled = true;
        setTimeout(delay, t);
        let currArgs = tempArgs;
        tempArgs = null;
        return fn(...currArgs);
      }
    }
  };
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
