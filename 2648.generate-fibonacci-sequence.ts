function* fibGenerator(): Generator<number, any, number> {
  let fib1: number = 0;
  let fib2: number = 1;
  yield fib1;
  yield fib2;
  yield fib2;
  while (true) {
    let tempfib1: number = fib1;
    fib1 = fib2;
    fib2 += tempfib1;
    yield fib1 + fib2;
  }
}

/* const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
gen.next().value; // 5
gen.next().value; // 8
gen.next().value; // 13
 */
