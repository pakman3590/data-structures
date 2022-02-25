var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // add storage object to this
  this.storage = {};
  // add current property to this
  this.current = 0;
};

// add push method to prototype
Stack.prototype.push = function(value) {
  // add value to storage object at current key
  this.storage[this.current] = value;
  // increment current key
  this.current ++;
};
// add pop mehtod to prototype
Stack.prototype.pop = function() {
  // store value at current key minus one
  let deleted = this.storage[this.current - 1];
  // delete value
  delete this.storage[this.current - 1];
  // decrement current key
  this.current --;
  // return value
  return deleted;
};
// add size method to prototype
Stack.prototype.size = function() {
  // return length of storage object key array
  return Object.keys(this.storage).length;
};
