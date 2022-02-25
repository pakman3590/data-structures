class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // add storage object to this
    this.storage = {};
    // add current property to this
    this.current = 0;
  }
  // add push method
  push(value) {
    // add value to storage object at current key
    this.storage[this.current] = value;
    // increment current key
    this.current ++;
  }
  // add pop method
  pop() {
    // store value at current key minus one
    let deleted = this.storage[this.current - 1];
    // delete value
    delete this.storage[this.current - 1];
    // decrement current key
    this.current --;
    // return value
    return deleted;
  }
  // add size method
  size() {
    // return length of storage object key array
    return Object.keys(this.storage).length;
  }
}