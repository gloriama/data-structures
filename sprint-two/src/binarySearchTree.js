var BinarySearchTree = function(value) { //written using prototypal class style
  var bst = Object.create(BinarySearchTree.prototype);
  
  bst.value = value; //create root node with the value = value
  bst.left = null; //create left property, initialized to null
  bst.right = null; //create right property, initialized to null
  
  return bst;
};

//create methods on BinarySearchTree.prototype
BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value){
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else if (value > this.value){
    if (this.right){
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    return this.left ? this.left.contains(value) : false;
  } else {
    return this.right ? this.right.contains(value) : false;
  }


};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb.call(this, this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 //insert: O(log n) (technically O(height of tree))
 //contains: O(log n) (technically O(height of tree))
 //depthFirstLog: O(n)