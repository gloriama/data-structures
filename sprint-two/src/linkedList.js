var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create node with value
    var node = Node(value);
    //if we are adding the first node to this list, point list.head to it
    //else, if we already have a list.tail, make its next property point to node
    if (list.tail === null) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    //list.tail = node;
    list.tail = node;
  };

  list.removeHead = function() {
    var returnVal = undefined;
    if (list.head) {
      returnVal = list.head.value;
      list.head = list.head.next;
      if (list.head === null) {
        list.tail = null;
      }
    }
    return returnVal;
  };

  list.contains = function(target) {
    var currNode = list.head;

    while(currNode){
      if (currNode.value === target){
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 //addToTail: O(1)
 //removeHead: O(1)
 //contains: O(n)