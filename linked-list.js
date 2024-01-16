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
    if (index < 0 || index >= this.#size) return null;

    let occupyingNode = this.at(index);

    if (occupyingNode !== null) {
      occupyingNode.value = value;
    }

    return null;
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
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
console.log(linkedList.find(0));
console.log(linkedList.find(1));
console.log(linkedList.find(2));
console.log(linkedList.find(3));

console.log(linkedList.size);

console.log(linkedList.toString());
