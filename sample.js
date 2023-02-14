class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Function to return the index of the parent node
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Function to return the index of the left child
  leftChildIndex(index) {
    return 2 * index + 1;
  }

  // Function to return the index of the right child
  rightChildIndex(index) {
    return 2 * index + 2;
  }

  // Function to insert a new node into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(); 
  }

  // Function to remove the root node (minimum value) from the heap
  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  // Function to maintain the min heap property while inserting a new node
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]) {
      let parentIndex = this.parentIndex(index);
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  // Function to maintain the min heap property while removing the root node
  heapifyDown() {
    let index = 0;
    while (this.leftChildIndex(index) < this.heap.length) {
      let leftChildIndex = this.leftChildIndex(index);
      let rightChildIndex = this.rightChildIndex(index);
      let smallerChildIndex = leftChildIndex;
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      }
      [this.heap[index], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[index],
      ];
      index = smallerChildIndex;
    }
  }

  delete(){
    this.heap[0]=this.heap[this.heap.length-1]
    this.heap.length--
    this.heapifyDown()
  }
  display(){
    for(let i=0;i<this.heap.length;i++){
        console.log(this.heap[i]);
    }
  }
}

const a = new MinHeap();
a.insert(10);
a.insert(2);
a.insert(3);
a.insert(4);
a.delete()
a.display()
// console.log(a.extractMin());
