

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(index, v);

  // first time we add k:v to storage at an index
    // create an array and store {k:v} at the 0th index
  // push {k:v} to the array at the index
  
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []); 
  }
  
  var item = {};
  item[k] = v;
  this._storage.get(index).push(item);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //return this._storage.get(index);

  var result = undefined;
  var bucket = this._storage.get(index);
  _.each(bucket, function(item) {
    if (k in item) {
      result = item[k];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use 'set' to set index of this._storage to undefined
  //this._storage.set(index, undefined);

  //var bucket = array at index in storage
  //loop through bucket, with callback that takes item, index:
    //if k in item
      //bucket.splice with index,1
  var bucket = this._storage.get(index);
  _.each(bucket, function(item, index) {
    if (k in item) {
      bucket.splice(index, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


