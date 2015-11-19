var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.queueSize = 0;
  this.storage = {};
  this.headIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.queueSize + this.headIndex] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
  if (this.queueSize === 0) {
    return undefined;
  } else {
    var returnVal = this.storage[this.headIndex];
    delete this.storage[this.headIndex];
    this.headIndex++;
    this.queueSize--;
    return returnVal;
  }
};

Queue.prototype.size = function() {
  return this.queueSize;
};
