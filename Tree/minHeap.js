class minHeap {
  constructor() {
    this.heap = [];
  }
  insert(arr) {
    for (let i in arr) {
      this.heap.push(arr[i]);
      this.heapifyUp();
    }
    return this.heap;
  }

  heapifyUp(i = this.heap.length - 1) {
    if (i <= 0) return;
    const heap = this.heap;
    const para = this.parentIdx(i);
    if (heap[para] > heap[i]) [heap[i], heap[para]] = [heap[para], heap[i]];
    this.heapifyUp(para);
  }

  delete() {
    let arr = this.heap;
    arr[0] = arr[arr.length - 1];
    arr.pop(arr.length - 1);
    this.heapifyDown(arr, arr.length, 0);
    return arr;
  }
  
  heapifyDown(arr, n, i) {
    let min = i;
    let left = this.leftIdx(i);
    let right = this.rightIdx(i);

    if (left < n && arr[min] > arr[left]) min = left;
    if (right < n && arr[min] > arr[right]) min = right;

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      this.heapifyDown(arr, n, min);
    }
  }

  leftIdx(i) {
    return 2 * i + 1;
  }
  rightIdx(i) {
    return 2 * i + 2;
  }
  parentIdx(i) {
    return Math.floor((i - 1) / 2);
  }
}

const h = new minHeap();
console.log(h.insert([5, 43, 22, 45, 3, 2]));
console.log(h.delete());
