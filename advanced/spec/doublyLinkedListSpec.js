describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToHead", "addToTail", "removeHead", "removeTail", and "contains"', function() {
    expect(doublyLinkedList.addToHead).to.be.a("function");
    expect(doublyLinkedList.addToTail).to.be.a("function");
    expect(doublyLinkedList.removeHead).to.be.a("function");
    expect(doublyLinkedList.removeTail).to.be.a("function");
    expect(doublyLinkedList.contains).to.be.a("function");
  });

  //tests addToHead (new test for doublyLinkedList)
  it('should designate a new head when new nodes are added to head', function(){
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  //tests addToTail
  it('should designate a new tail when new nodes are added to tail', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  //tests removeHead's remove functionality
  it('should remove the head from the list when removeHead is called', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  //tests removeTail's remove functionality (new test for doublyLinkedList)
  it('should remove the tail from the list when removeTail is called', function(){
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  //tests removeHead's return functionality
  it("should return the value of the former head when removeHead is called", function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  //tests removeTail's return functionality (new test for doublyLinkedList)
  it("should return the value of the former tail when removeTail is called", function(){
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
  });

  //tests contains with addToHead and addToTail (updated test for doublyLinkedList)
  it("should contain a value that was added", function(){
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    expect(doublyLinkedList.contains(1)).to.equal(true);
    expect(doublyLinkedList.contains(2)).to.equal(true);
    expect(doublyLinkedList.contains(3)).to.equal(false);

    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  //tests contains with removeHead and removeTail (updated test for doublyLinkedList)
  it('should not contain a value that was removed', function(){
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(1)).to.equal(false);

    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(5)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
});
