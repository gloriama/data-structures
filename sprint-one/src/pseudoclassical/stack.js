var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  if (this.stackSize === 0){
    return undefined;
  } else {
    var returnVal = this.storage[this.stackSize - 1];
    delete this.storage[this.stackSize - 1];
    this.stackSize--;
    return returnVal;
  }
};

Stack.prototype.size = function(){
  return this.stackSize;
};




