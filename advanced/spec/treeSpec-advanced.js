describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "removeFromParent", "contains", and "traverse", and properties named "value" and "parent"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function"); //new test for advanced tree
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true); //new test for advanced tree
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
    expect(tree.children[0].parent).to.equal(tree); //new test for advanced tree
  });

  it('should remove reference to parent tree from child and vice versa', function() {
    tree.addChild(5);
    tree.addChild(9);
    var firstChild = tree.children[0];
    firstChild.removeFromParent();
    expect(tree.contains(5)).to.equal(false);
    expect(firstChild.parent).to.equal(null);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should apply a callback for each value in the tree', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.addChild(4);
    var product = 1;
    tree.traverse(function(value) {
      if (value) {
        product *= value;
      }
    });
    expect(product).to.equal(24);
  });

});
