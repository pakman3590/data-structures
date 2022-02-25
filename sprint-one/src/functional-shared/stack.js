var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // declare instance object
  let newInstance = {
    // declare storage object
    storage: {},
    // declare current key property
    currentKey: 0
  };
  // copy methods from stack methods object
  _.extend(newInstance, stackMethods);
  // return new instance object
  return newInstance;
};

var stackMethods = {
  // declare push method
  push: function(value) {
    // add value with current key to storage object
    this.storage[this.currentKey] = value;
    // increment current key
    this.currentKey ++;
  },
  // declare pop method
  pop: function() {
    // store value at current key
    let deleted = this.storage[this.currentKey - 1];
    // delete value
    delete this.storage[this.currentKey - 1];
    // decrement current key
    this.currentKey --;
    // return value
    return deleted;
  },
  // declare size mehtod
  size: function() {
    // return length of storage keys array
    return Object.keys(this.storage).length;
  }
};


