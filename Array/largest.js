// //largest
// let arr = [93,7, 4, 5, 6];
// let n = arr.length;
// function largest(arr, n) {
//   let large = 0;
//   let prev = 0;
//   let pree = 0;
//   let preee = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > large) {
//       preee = pree;
//       pree = prev;
//       prev = large;
//       large = arr[i];
//     } else if (arr[i] > prev) {
//       prev = arr[i];
//     }else if (arr[i] > pree) {
//       pree = arr[i];
//     }
//   }
//   return console.log(preee, pree, prev, large);
// }
// largest(arr, n);


function secondLargest(arr) {
    var max1st = arr[0];
    var max2nd = 0;
    let max3=0
     
    for(var i=0; i<arr.length; i++) {
      if(arr[i] > max1st) {
        max3=max2nd
        max2nd = max1st;
        max1st = arr[i];
      }
      else if(arr[i] > max2nd && arr[i] !== max1st) {
        max2nd = arr[i];
      }
    }
    return max2nd
  }
  
  console.log(secondLargest([10,99]));
  console.log(secondLargest([10,22,48,54,27,8]));
  console.log(secondLargest([2,4,54,27,98,99]));
  console.log(secondLargest([21,42,87,27,8,99]));