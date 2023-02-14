function hello(a, val) {
  let n = a.length;
  for (let i = 0, j = n - 1; i < n; i++) {
    if (i >= j) {
      break;
    }
    if (a[i] == val) {
      if (a[j] == val) {
        j--;
      }
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
      i--;
    }
  }
  return a;
}
console.log(hello([1, 3, 2, 3, 4, 4, 3, 1, 2, 3, 3, 3, 3, 3, 3], 3));
