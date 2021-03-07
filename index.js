const runTest = require('./runTest')
const Queue = require('./Queue');
const evenFirst = (queueA) => {
  let evenQueue = new Queue();
  let oddQueue = new Queue();
  while(queueA.peek()) {
    let item = queueA.dequeue();
    if (item % 2 == 0) {
      evenQueue.enqueue(item);
    } else {
      oddQueue.enqueue(item);
    }
  }

  // put all the even queue items back first
  while (evenQueue.peek()) {
    queueA.enqueue(evenQueue.dequeue())
  }

  // put all the odd queue items back
  while (oddQueue.peek()) {
    queueA.enqueue(oddQueue.dequeue());
  }
}


// don't touch this line
runTest(evenFirst);