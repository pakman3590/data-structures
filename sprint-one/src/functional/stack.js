/*
HIGH ORDER
stores values in a FIFO arrangement
dequeue method should remove "newest" object and return removed object
*/

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // declare current key tracker property
  someInstance.nextKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // add value to storage object at next key
    someInstance.storage[someInstance.nextKey] = value;
    // update next key
    someInstance.nextKey ++;
  };

  someInstance.pop = function() {
    // store key to remove for return
    let removed = someInstance.storage[someInstance.nextKey - 1];
    // delete key
    delete someInstance.storage[someInstance.nextKey - 1];
    // update next key
    someInstance.nextKey --;
    // return deleted key
    return removed;
  };

  someInstance.size = function() {
    // return length of storage keys object
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};