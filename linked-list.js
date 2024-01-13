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

  append(value) {
    if (this.tail === null && this.head === null) {
      this.tail = new Node(value);
      this.head = new Node(value);
    } else if (this.head !== null && this.tail !== null) {
      const temp = this.head;
      this.head  = new Node(value);
      this.head.next = temp;
    }

    this.size += 1;
  }
}

const linkedList = new LinkedList();
console.log(linkedList);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log(linkedList);
