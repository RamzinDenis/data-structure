const { LinkedList } = require('./LinkedList');

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.prepend(value);
  }

  pop() {
    return this.linkedList.deleteHead();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  toArray() {
    return this.linkedList.toArray();
  }
}

const stack = new Stack();

stack.push('1234');

console.log(stack.pop(), stack.toArray());
