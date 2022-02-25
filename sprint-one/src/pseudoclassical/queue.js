var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // add storage object to this
  this.storage = {};
  // add current and last properties to this
  this.current = 0;
  this.last = 0;
};

// add enqueue method to prototype
Queue.prototype.enqueue = function(value) {
  // add value to storage object at last key
  this.storage[this.last] = value;
  // increment last
  this.last ++;
};
// add dequeue method to prototype
Queue.prototype.dequeue = function() {
  // store value at curent key
  let deleted = this.storage[this.current];
  // delete value
  delete this.storage[this.current];
  // increment current key
  this.current ++;
  // return value
  return deleted;
};
// add size method to prototype
Queue.prototype.size = function() {
  // return length of storage keys array
  return Object.keys(this.storage).length;
};


