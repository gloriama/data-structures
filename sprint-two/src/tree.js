var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value); // creates new tree with value as tree's value
  this.children.push(child);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */

//addChild: O(1)
//contains: O(n)