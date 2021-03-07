const { createQueueFromInput } = require('./util')
const runTest = (func) => {

  let queueA = createQueueFromInput();

  func(queueA);
  queueA.data.traverse(n => console.log(n.getData()));

}

module.exports = runTest;