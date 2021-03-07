const Node = require("./Node");
class LinkedList {
  head = null;
  add(newNode) {
    if (this.head == null) {
      this.head = newNode;
    } else {
      // traverse to end
      let current = this.head;
      while (current.getNext() != null) {
        current = current.getNext();
      }
      // at this point current is at the last node
      current.setNext(newNode);
    }
  }
  find(data) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.getData() == data) {
        return index;
      }
      current = current.getNext();
      index++;
    }
    return -1;
  }
  traverse(callback) {
    let current = this.head;
    while (current != null) {
      callback(current);
      current = current.getNext();
    }
  }
  deleteData(dataToDelete) {
    if (this.head.getData() == dataToDelete) {
      let deleted = this.head;
      this.head = deleted.getNext();
      // trash the current node
      return deleted;
    } else {
      let current = this.head;
      while (
        current.getNext() != null &&
        current.getNext().getData() != dataToDelete
      ) {
        current = current.getNext();
      }
      // we either reach end of the linked list or the item BEFORE what we want to delete is found
      if (
        current.getNext() != null &&
        current.getNext().getData() == dataToDelete
      ) {
        let deleted = current.getNext();
        current.setNext(current.getNext().getNext());
        return deleted;
      }
    }
  }
  deleteAt(index) {
    if (index == 0) {
      let deleted = this.head;
      this.head = deleted.getNext();
      // trash the current node
      return deleted;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (current.getNext() != null) {
          current = current.getNext();
        } else {
          throw "Index out of bounds";
        }
      }

      let deleted = current.getNext();
      current.setNext(current.getNext().getNext());
      return deleted;
    }
  }
  insertAt(index, newNode) {
    if (index == 0) {
      let formerHead = this.head;
      this.head = newNode;
      this.head.setNext(formerHead);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.getNext();
      }
      let oldNext = current.getNext();
      current.setNext(newNode);
      newNode.setNext(oldNext);
    }
  }
  getAt(index) {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (current.getNext()) {
        current = current.getNext();
      } else {
        throw "Index out of range";
      }
    }
    return current;
  }
  length() {
    let length = 0;
    let current = this.head;
    while (current != null) {
      length++;
      current = current.getNext();
    }
    return length;
  }
}

module.exports = LinkedList;
