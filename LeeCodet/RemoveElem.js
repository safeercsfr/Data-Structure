// var removeElement = function(nums, val) {
//   let k=nums.length;
//   for(let i=0;i<nums.length;i++){
//       if(nums[i]==val){
//           nums[i] = '_';
//           k-=1;
//       }
//   }
//   nums.sort();
//   console.log(nums,k)
//   return k;
// };
// var removeElement = function(nums, val) {
//   // create array with content of nums but without val items
//   let arr = nums.filter(num => num !== val);
//   // set nums length to zero
//   nums.length = 0;
//   // push content of arr to num
//   nums.push(...arr);
//   //return length of nums
//   console.log(nums);
//   return nums.length;
// };
// console.log(removeElement([0,1,2,2,3,0,4,2],2));

var removeElement = function (nums, val) {
  var j = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      // nums[j++] = nums[i];
      j++;
    }
  }
  console.log(nums);
  return j;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
