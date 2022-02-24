/*
HIGH LEVEL:
stores values within an object in order based on numeric keys
adds new values to object at end (highest key) and removes lowest key
*/

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // declare first index property
  someInstance.firstKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add value with next numeric key to storage
    this.storage[this.size()] = value;
  };

  someInstance.dequeue = function() {
    // remove object at first key from storage
    delete this.storage[this.firstKey];
    // update new first key
    this.firstKey ++;
  };

  someInstance.size = function() {
    // return number of keys in storage object
    return Object.keys(this.storage).length;
  };


  return someInstance;
};
