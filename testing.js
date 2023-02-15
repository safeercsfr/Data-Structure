class minHeapSort {
  sort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.heapify(arr, arr.length, i);
    }

    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.heapify(arr, i, 0);
    }
    return arr;
  }

  heapify(arr, n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
      this.heapify(arr, n, smallest);
    }
  }
}

const m = new minHeapSort();
console.log(m.sort([9, 10, 23, 56, 7, 8]));
