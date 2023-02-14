function quickSort(arr, low, high) {
  if (low >= high) return;

  let start = low;
  let end = high;
  let mid = start + parseInt((end - start) / 2);
  let pivot = arr[mid];
  while (start <= end) {
    while (arr[start] < pivot) start++;
    while (arr[end] > pivot) end--;
    if (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  quickSort(arr, low, end);
  quickSort(arr, start, high);
}
let arr = [7, 5, 3, 2, 1, 0, 7];
let n = arr.length;
quickSort(arr, 0, n - 1);
console.log(arr);

// [arr[start],arr[end]]=[arr[end],arr[start]]
