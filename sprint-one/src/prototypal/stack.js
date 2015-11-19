var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = Object.create(stackMethods);

  stack.stackSize = 0;
  stack.storage = {};

  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function() {
  if (this.stackSize === 0) {
    return undefined;
  } else {
    var returnVal = this.storage[this.stackSize-1];
    delete this.storage[this.stackSize-1];
    this.stackSize--;
    return returnVal;
  }
};

stackMethods.size = function() {
  return this.stackSize;
};