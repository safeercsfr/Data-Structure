class maxHeap {
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
    if (heap[para] < heap[i]) [heap[i], heap[para]] = [heap[para], heap[i]];
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
    let max = i;
    let left = this.leftIdx(i);
    let right = this.rightIdx(i);

    if (left < n && arr[max] < arr[left]) max = left;
    if (right < n && arr[max] < arr[right]) max = right;

    if (max !== i) {
      [arr[i], arr[max]] = [arr[max], arr[i]];
      this.heapifyDown(arr, n, max);
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

const h = new maxHeap();
console.log(h.insert([5, 43, 22, 45, 3, 2]));
console.log(h.delete());
