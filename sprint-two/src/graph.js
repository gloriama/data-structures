

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
    //key: node value
    //val: object containing node values of all neighbors of that node
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (node in this.storage);
  //using this.storage.hasOwnProperty(node) would be a more robust solution
  //but probably unnecessary for this implementation
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //search this.storage[fromNode] for toNode (or vice versa)
  return (toNode in this.storage[fromNode]);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //creates an edge between two nodes by adding a dummy true value to their neighbors object
  this.storage[fromNode][toNode] = true; //adds toNode to fromNode's neighbors
  this.storage[toNode][fromNode] = true; //and vice versa
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.storage, function(neighborsObj, nodeVal) {
    cb(nodeVal);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


