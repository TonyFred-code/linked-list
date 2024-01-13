class Node {

  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

const linkedList = new LinkedList();
console.log(linkedList);
const linkedList2 = new LinkedList();
console.log(linkedList == linkedList2)
console.log(linkedList === linkedList2)
