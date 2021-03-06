var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // set._storage = undefined;
  this._storage[item] = true; // true is a dummy value
};

setPrototype.contains = function(item) {
  return (item in this._storage);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// setPrototype.add: O(1)
// setPrototype.contains: O(1)
// setPrototype.remove: O(1)