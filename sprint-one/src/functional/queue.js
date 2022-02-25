/*
HIGH LEVEL:
stores values within an object in order based on numeric keys
adds new values to object at end (highest key) and removes lowest key
dequeue method should remove "oldest" object and return the removed object
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
    someInstance.storage[someInstance.size() + someInstance.firstKey] = value;
  };

  someInstance.dequeue = function() {
    // store first key object from storage
    let dequeued = someInstance.storage[someInstance.firstKey];
    // remove object at first key from storage
    delete someInstance.storage[someInstance.firstKey];
    // update new first key
    someInstance.firstKey ++;
    // return stored object
    return dequeued;
  };

  someInstance.size = function() {
    // return number of keys in storage object
    return Object.keys(someInstance.storage).length;
  };


  return someInstance;
};
