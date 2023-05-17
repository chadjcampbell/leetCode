type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {
  async function promiseQueue() {
    while (functions.length !== 0) {
      const firstFunction = functions.shift();
      await firstFunction!();
      await promiseQueue();
    }
  }
  const promiseArray = Array(n).fill(0).map(promiseQueue);
  await Promise.all(promiseArray);
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
