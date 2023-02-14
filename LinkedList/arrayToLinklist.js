class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(array) {
    this.head = null;
    this.tail = null;

    for (let i = 0; i < array.length; i++) {
      let node = new Node(array[i]);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    }
  }
}
let arr = [1, 2, 3, 4, 5];
let linkedList = new LinkedList(arr);
