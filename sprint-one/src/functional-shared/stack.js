var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = {};

  stack.stackSize = 0;
  stack.storage = {};
  _.extend(stack, stackMethods);
  
  return stack;
};

var stackMethods = {};

//stackMethods.push = a function that adds a value to the stack bound to 'this'
//stackMethods.pop = a function that removes a value from the stack (same as above)
//stackMethods.size = a function that returns the size of the stack (same as above)

stackMethods.push = function(value) {
  this.stackSize++;
};

stackMethods.pop = function() {
  this.stackSize--;
};

stackMethods.size = function() {
  return this.stackSize;
};