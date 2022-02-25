var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // declare instance object
  let newInstance = {
    // declare storage object
    storage: {},
    // declare current key property
    currentKey: 0,
    // declare last added property
    last: 0
  };
  // copy methods from queue methods object
  _.extend(newInstance, queueMethods);
  // return instance
  return newInstance;
};

var queueMethods = {
  // declare enqueue method
  enqueue: function(value) {
    // add value with last key
    this.storage[this.last] = value;
    // update last key
    this.last ++;
  },
  // declare dequeue method
  dequeue: function() {
    // store value of entry to be removed
    let removed = this.storage[this.currentKey];
    // delete entry
    delete this.storage[this.currentKey];
    // update currentKey
    this.currentKey ++;
    // return stored entry
    return removed;
  },
  // declare size method
  size: function() {
    // return length of object keys array of storage
    return Object.keys(this.storage).length;
  }
};


