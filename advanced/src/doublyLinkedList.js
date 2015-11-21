//declare DoublyLinkedList constructor function in functional-shared style

//DoublyLinkedList is a function that takes no args
  //create an empty object called doublyLinkedList
  //add property to doublyLinkedList called head, initialized to null
  //add property to doublyLinkedList called tail, initialized to null

  //via extend, add methods to doublyLinkedList

  //return doublyLinkedList
var DoublyLinkedList = function() {
  var doublyLinkedList = {};

  doublyLinkedList.head = null;
  doublyLinkedList.tail = null;

  _.extend(doublyLinkedList, doublyLinkedListMethods);

  return doublyLinkedList;
};

//declare doublyLinkedListMethods, initialized to empty object
var doublyLinkedListMethods = {};

//add methods for doublyLinkedList