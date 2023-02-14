var validMountainArray = function(arr) {
    let n=arr.length
    var i = 0;
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
    if (i == 0 || i == n - 1) {
      return false;
    }
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
    if ( i == n - 1) {
      return true;
    }else{
      return false
    }
  };
  let arr = [1, 2, 3, 5,5, 3, 2, 1];
    console.log(validMountainArray(arr));