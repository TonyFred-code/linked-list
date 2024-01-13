class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  #size = 0;
  #head = null;

  // constructor() {
  //   this.head = null;
  //   this.tail = null;
  //   this.#size = 0;
  // }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    let currentHead = this.#head;

    if (currentHead === null) return null;

    let tail = this.#head;

    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }

    return tail;
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
    let prev = this.#head;
    let output = ``;

    if (prev !== null) {
      while (prev.nextNode !== null) {
        const value = prev.value;
        output += `(${value}) --> `;
        prev = prev.nextNode;
      }

      output += `(${prev.value}) --> `; // tail - last element;
    }
    output += 'null';

    return output;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
console.log(linkedList.tail);
console.log(linkedList.head);
console.log(linkedList.toString());
