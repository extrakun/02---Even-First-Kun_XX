const LinkedList = require('./LinkedList');
const Node = require('./Node');

class Stack {
  constructor() {
    this.data = new LinkedList();
  }
  push(newData) {
    this.data.insertAt(0, new Node(newData));
  }
  pop() {
    let deleted = this.data.deleteAt(0);
    if (deleted != null) {
          return deleted.getData();
    }
    return null;
  }
  isEmpty() {
    return this.data.length() == 0;
  }
  peek() {
    if (this.data.getAt(0) != null) {
      return this.data.getAt(0).getData();
    }
    return null;
  }
}

module.exports = Stack;
