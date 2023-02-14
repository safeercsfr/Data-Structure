class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(array) {
    for (let i = 0; i < array.length; i++) {
      this.heap.push(array[i]);
      this.heapifyUp();
    }
  }

  heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0 && this.heap[this.parIdx(idx)] < this.heap[idx]) {
      let par = this.parIdx(idx);
      [this.heap[par], this.heap[idx]] = [this.heap[idx], this.heap[par]];
      idx = par;
    }
  }

  heapifyDown(idx, heapSize) {
    let max = idx;
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;

    if (left < heapSize && this.heap[left] > this.heap[max]) {
      max = left;
    }

    if (right < heapSize && this.heap[right] > this.heap[max]) {
      max = right;
    }

    if (max !== idx) {
      [this.heap[idx], this.heap[max]] = [this.heap[max], this.heap[idx]];
      this.heapifyDown(max, heapSize);
    }
  }

  sort() {
    let heapSize = this.heap.length;

    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i, heapSize);
    }

    for (let i = heapSize - 1; i > 0; i--) {
      [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
      heapSize--;
      this.heapifyDown(0, heapSize);
    }

    return this.heap;
  }

  dis() {
    let i = 0;
    for (i in this.heap) {
      console.log(this.heap[i]);
    }
  }

  parIdx(idx) {
    return parseInt((idx - 1) / 2);
  }
}

const m = new MaxHeap();
m.insert([9, 10, 23, 56, 7, 8]);
console.log(m.sort()); // [7, 8, 9, 10, 23, 56]
