var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var stackSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    stackSize++;
  };

  someInstance.pop = function() {
    stackSize--;
  };

  someInstance.size = function() {
    return stackSize; 
  };

  return someInstance;
};
