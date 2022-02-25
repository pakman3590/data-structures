var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // declare instance object
  let newInstance = Object.create(stackMethods);
  // add storage object to instance
  newInstance.storage = {};
  // add current key property to instance
  newInstance.current = 0;
  // return instance
  return newInstance;
};

var stackMethods = {
  // declare push method
  push: function(value) {
    // add value at current key to storage object
    this.storage[this.current] = value;
    // increment current
    this.current ++;
  },
  // declare pop method
  pop: function() {
    // store value at current key minus one
    let deleted = this.storage[this.current - 1];
    // delete value
    delete this.storage[this.current - 1];
    // decrement current
    this.current --;
    // return value
    return deleted;
  },
  // declare size method
  size: function() {
    // return length of storage keys
    return Object.keys(this.storage).length;
  }
};


