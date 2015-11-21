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

doublyLinkedListMethods.addToTail = function() {

};

doublyLinkedListMethods.removeHead = function() {

};

doublyLinkedListMethods.removeTail = function() {

};

doublyLinkedListMethods.contains = function() {

};

//create node class
var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};
