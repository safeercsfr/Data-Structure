class heapSort {
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
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
  
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]];
        this.heapify(arr, n, largest);
      }
    }
  }
  
  const m = new heapSort();
  // m.insert();
  console.log(m.sort([9, 10, 23, 56, 7, 8]));
  