class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // add storage object to this
    this.storage = {};
    // add current and last properties to this
    this.current = 0;
    this.last = 0;
  }
  // add enqueue method
  enqueue(value) {
    // add value to storage object at last key
    this.storage[this.last] = value;
    // increment last key
    this.last ++;
  }
  // add dequeue method
  dequeue() {
    // store value at current key
    let deleted = this.storage[this.current];
    // delete value
    delete this.storage[this.current];
    // increment current key
    this.current ++;
    // return value
    return deleted;
  }
  // add size method
  size() {
    // return length of storage object keys array
    return Object.keys(this.storage).length;
  }
}
