type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  map = {};
  subscribe(eventName: string, callback: Callback): Subscription {
    if (!(eventName in this.map)) {
      this.map[eventName] = new Set();
    }
    this.map[eventName].add(callback);
    return {
      unsubscribe: () => {
        this.map[eventName].delete(callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any {
    if (this.map[eventName] === undefined) {
      return [];
    }
    let res: any[] = [];
    this.map[eventName].forEach((cb) => {
      res.push(cb(...args));
    });
    return res;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
