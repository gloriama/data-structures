

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

  var bucket = this._storage.get(index);

  var found = false;
  _.each(bucket, function(item) {
    if (k in item){
      item[k] = v;
      found = true;
    }
  });

  if (!found){
    var tuple = [k, v];
    bucket.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //return this._storage.get(index);

  var result = undefined;
  var bucket = this._storage.get(index);
  _.each(bucket, function(tuple) {
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var kIndex = -1;
  _.each(bucket, function(tuple, index) {
    if (tuple[0] === k) {
      kIndex = index;
    }
  });
  if (kIndex >= 0) {
    bucket.splice(kIndex, 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//insert: O(n) if hash degenerated into an array
//retrieve: O(n) if hash degenerated into an array
//remove: O(n) if hash degenerated into array
//(all would be O(1) if the hash function is perfect)