function hello(a, t) {
  for (i = 0, j = a.length - 1; i < a.length; i++) {
    if (i >= j) {
      break;
    }
    if (a[i] == t) {
      if (a[j] == t) {
        j--;
      } 
        let temp = a[j];
        a[j] = a[i];
        a[i] = temp;
      i--;
    }
  }
  console.log(nums);
}
const a = [1, 3, 6, 4, 3, 6, 2, 3, 3, 4, 3];
let t = 3;
hello(a, t);
