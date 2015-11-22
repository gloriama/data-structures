var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value); // creates new tree with value as tree's value
  this.children.push(child);
  child.parent = this;
};

treeMethods.removeFromParent = function() {
  var thisTree = this;
  this.parent.children = _.reject(this.parent.children, function(child) {
    return child === thisTree;
  });
  this.parent = null;
};

treeMethods.contains = function(target) {
  //(a longer version, saved for fun)

  // var found = false;

  // var search = function(root){
  //   if (root.value === target){
  //     found = true;
  //   } else {
  //     _.each(root.children, function(child){
  //       search(child);
  //     });
  //   }
  // }
  // search(this);
  // return found;

  //==============

  return (this.value === target) ||
         _.some(this.children, function(child) { return child.contains(target); });

};

treeMethods.traverse = function(cb) {
  var thisTree = this;
  cb.call(this, this.value);
  _.each(this.children, function(child) {
    child.traverse(cb);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//addChild: O(1)
//removeFromParent: O(n)
//contains: O(n)