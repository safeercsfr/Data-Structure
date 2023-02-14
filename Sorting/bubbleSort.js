// function swap(arr, xp, yp) {
//   var temp = arr[xp];
//   arr[xp] = arr[yp];
//   arr[yp] = temp;
// }
// function bubbleSort(arr, n) {
//   var i, j;
//   for (i = 0; i < n; i++) {
//     for (j = 0; j < n - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
// }
// function printArray(arr, n) {
//   var i;
//   for (i = 0; i < n; i++) {
//     console.log(arr[i] + "\n");
//   }
// }
// const arr = [4, 3, 6, 7, 2];
// let n = 5;
// console.log("unsorted array:\n");
// printArray(arr, n);

// bubbleSort(arr, n);
// console.log("sorted array:\n");
// printArray(arr, n);

// JavaScript code for recursive bubble sort algorithm
function bubblesort(arr, n) {
	if (n == 0 || n == 1)
		return;

	for (var i = 0; i < n - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			[arr[i],arr[i+1]]=[arr[i+1],arr[i]]
		}
	}
	bubblesort(arr, n - 1);
}

var arr = [2, 5, 1, 6, 9];
var n = arr.length;

console.log("Unsorted array: ");
for (i = 0; i < n; i++)
	console.log(arr[i] + " ");

bubblesort(arr, n);

console.log("Sorted array: ");
for (i = 0; i < n; i++)
	console.log(arr[i] + " ");
	