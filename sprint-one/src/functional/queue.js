var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var queueSize = 0;
  var headIndex = 0; // points to key of next item to dequeue

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueSize + headIndex] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    if(queueSize === 0){
      return undefined; 
    } else{
      var returnVal = storage[headIndex];
      delete storage[headIndex];
      headIndex++;
      queueSize--;  
      return returnVal;
    }
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
