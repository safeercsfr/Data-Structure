let bubbleSort = (a, n) => {
  for (let j = 0; j < n; j++) {
    if (n == 1) return;
    if (a[j] > a[j + 1]) {
      //swap
      a[j] = a[j] + a[j + 1];
      a[j + 1] = a[j] - a[j + 1];
      a[j] = a[j] - a[j + 1];
    }
  }
  bubbleSort(a, n - 1);
  return a;
};
let arr = [2, 1, 5, 3];
let n = arr.length;
console.log(bubbleSort(arr, n));

// function bubbleSort(arr, n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
// }
