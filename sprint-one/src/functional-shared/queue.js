var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queue = {};

  queue.queueSize = 0;
  queue.storage = {};
  queue.headIndex = 0;

  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.queueSize + this.headIndex] = value;
  this.queueSize++;
};

queueMethods.dequeue = function(){
  if (this.queueSize === 0){
    return undefined;
  } else {
    var returnVal = this.storage[this.headIndex];
    delete this.storage[this.headIndex];
    this.headIndex++;
    this.queueSize--;
    return returnVal;
  }
};

queueMethods.size = function(){
  return this.queueSize;
};