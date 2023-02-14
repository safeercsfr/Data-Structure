let arr1 = [1, 2,3];
let arr2 = [4, 5, 6];

let i = arr1.length - 1;
let j = arr2.length - 1;

while (j >= 0) {
    arr1[i + j + 1] = arr2[j--];
}
console.log(arr1); // [1, 2, 3, 4, 5, 6]