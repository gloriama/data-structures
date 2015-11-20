var BinarySearchTree = function(value) { //written using prototypal class style
  var bst = Object.create(BinarySearchTree.prototype);
  
  bst.value = value; //create root node with the value = value
  bst.left = null; //create left property, initialized to null
  bst.right = null; //create right property, initialized to null
  
  return bst;
};

//create methods on BinarySearchTree.prototype
BinarySearchTree.prototype.insert = function(value) {

};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
