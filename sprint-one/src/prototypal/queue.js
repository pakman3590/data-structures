var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // declare instance object
  let newInstance = Object.create(queueMethods);
  // give instance object storage object
  newInstance.storage = {};
  // give instance object current and last properties
  newInstance.current = 0;
  newInstance.last = 0;
  // return new instance
  return newInstance;
};

var queueMethods = {
  // declare enqueue method
  enqueue: function(value) {
    // add object at last key in storage
    this.storage[this.last] = value;
    // increment last key
    this.last ++;
  },
  // declare dequeue method
  dequeue: function() {
    // store value at current key
    let deleted = this.storage[this.current];
    // delete value
    delete this.storage[this.current];
    // increment current key
    this.current ++;
    // return value
    return deleted;
  },
  // declare size method
  size: function() {
    // return length of storage object key array
    return Object.keys(this.storage).length;
  }
};


