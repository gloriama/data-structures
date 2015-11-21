//classes use functional-shared style

var DoublyLinkedList = function() {
  var doublyLinkedList = {};

  doublyLinkedList.head = null;
  doublyLinkedList.tail = null;

  _.extend(doublyLinkedList, doublyLinkedListMethods);

  return doublyLinkedList;
};

var doublyLinkedListMethods = {};

doublyLinkedListMethods.addToHead = function(value) {
  var node = Node(value);

  if (this.tail) {
    this.head.previous = node;
    node.next = this.head;
  } else {
    this.tail = node;
  }
  
  this.head = node;
};

doublyLinkedListMethods.addToTail = function(value) {
  var node = Node(value);

  if (this.tail) {
    node.previous = this.tail;
    this.tail.next = node;
  } else {
    this.head = node;
  }
  
  this.tail = node;
};

doublyLinkedListMethods.removeHead = function() {
  var returnVal = undefined;

  if (this.head) {
    returnVal = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }
  }

  return returnVal;
};

doublyLinkedListMethods.removeTail = function() {
  var returnVal = undefined;

  if (this.tail) {
    returnVal = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
  }

  return returnVal;
};

doublyLinkedListMethods.contains = function(target) {
  var currNode = this.head;
  while (currNode){
    if (currNode.value === target){
      return true;
    } else {
      currNode = currNode.next;
    }
  }
  return false;
};

//create node class
var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};
