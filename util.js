const LinkedList = require('./LinkedList');
const Node = require('./Node');
const Stack = require('./Stack');
const Queue = require('./Queue')
const prompt = require('prompt-sync')();

const createQueueFromInput = () => {
  let str = prompt("Enter a sequence of numbers, separated by comma: ");
  let data = str.split(',').map(d => parseInt(d));
  return createQueue(data)
}

const createQueue = (data) => {
  let queue = new Queue();
  for (let d of data) {
    queue.enqueue(d);
  }
  return queue;
}

const createLinkListFromInput = () => {
  let str = prompt("Enter a sequence of numbers, separated by comma: ");
  let data = str.split(',').map(d => parseInt(d));
  return createLinkList(data)
}

const createStackFromInput = () => {
  let str = prompt("Enter a sequence of numbers, separated by comma: ");
  let data = str.split(',').map(d => parseInt(d));
  return createStack(data)
}

const createStack = (data) => {
  let stack = new Stack();
  for (let d of data.reverse()) {
    stack.push(d);
  }
  return stack;

}

const createLinkList = (data) => {
  let linkedList = new LinkedList();
  for (let d of data) {
    linkedList.add(new Node(d));
  }
  return linkedList;

}

module.exports = { createLinkListFromInput, createStackFromInput, createQueueFromInput };