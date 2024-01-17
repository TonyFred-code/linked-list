class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  #size = 0;
  #head = null;

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    if (this.isEmpty()) return null;

    let tail = this.#head;

    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }

    return tail;
  }

  isEmpty() {
    return this.#size === 0;
  }

  at(index) {
    if (index < 0 || index >= this.#size) return null;

    if (this.isEmpty()) return null;

    let count = 0;
    let node = this.#head;

    while (count < index && node.nextNode !== null) {
      count += 1;
      node = node.nextNode;
    }

    return node;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    let tail = this.#head;

    if (tail.nextNode === null) {
      this.#head = null;
      return tail;
    }

    let beforeTail = null;

    while (tail.nextNode !== null) {
      beforeTail = tail;
      tail = tail.nextNode;
    }

    beforeTail.nextNode = null;
    this.#size -= 1;

    return tail;
  }

  contains(value) {
    if (this.isEmpty()) return false;

    let currentHead = this.#head;

    if (currentHead.value === value) return true;

    while (currentHead.nextNode !== null) {
      let next = currentHead.nextNode;
      if (next.value === value) return true;
      currentHead = next;
    }

    return false;
  }

  find(value) {
    if (this.isEmpty()) return null;

    let node = this.#head;
    let index = 0;

    while (node !== null) {
      if (node.value === value) return index;

      node = node.nextNode;
      index += 1;
    }

    return null;
  }

  insertAt(value, index) {
    if (index < 0) {
      // Invalid index, cannot insert
      return null;
    }

    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.#size) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      const previousNode = this.at(index - 1);

      newNode.nextNode = previousNode.nextNode;
      previousNode.nextNode = newNode;
    }

    this.#size += 1;
  }

  removeAt(index) {
    if (index < 0 || index >= this.#size) return null;

    if (index === 0) {
      if (this.#size === 1) {
        this.#head = null;
      } else {
        this.#head.value = this.#head.nextNode.value;
        this.#head.nextNode = this.#head.nextNode.nextNode;
      }
    } else {
      let occupyingNode = this.at(index);
      let prevNode = this.at(index - 1);

      if (occupyingNode !== null && prevNode !== null) {
        prevNode.nextNode = occupyingNode.nextNode;
      }
    }

    this.#size -= 1;
  }

  append(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
    } else {
      let tail = this.#head;

      while (tail.nextNode !== null) {
        tail = tail.nextNode;
      }

      tail.nextNode = new Node(value);
    }

    this.#size += 1;
  }

  prepend(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
    } else {
      const temp = this.#head;
      this.#head = new Node(value);
      this.#head.nextNode = temp;
    }

    this.#size += 1;
  }

  toString() {
    let node = this.#head;
    let output = ``;

    while (node !== null) {
      output += `(${node.value}) --> `;
      node = node.nextNode;
    }

    return (output += 'null');
  }
}

const linkedList = new LinkedList();

linkedList.prepend('test1');
linkedList.append('test2');
linkedList.append('test3');
console.log(linkedList.toString()); // (test1) -> (test2) -> (test3) -> null
console.log(linkedList.size); // 3
console.log(linkedList.head); // return head Node
console.log(linkedList.tail); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(2)); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(4)); // There is no item for this index
linkedList.pop();
console.log(linkedList.toString()); // (test1) -> (test2) -> null
console.log(linkedList.contains('test1')); // true
console.log(linkedList.find('test2')); // 1
linkedList.prepend('test3');
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> null
linkedList.insertAt('test4', 2);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> null
linkedList.insertAt('test5', 8);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> (test5) -> null
linkedList.removeAt(0);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> (test5) -> null
