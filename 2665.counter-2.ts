type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let initialNum = init;
  const counterObj = {
    increment: () => ++initialNum,
    decrement: () => --initialNum,
    reset: () => (initialNum = init),
  };
  return counterObj;
}
