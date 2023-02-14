var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] +nums[j] == target ) {
          return new Array (i,j);
      }
      }
    }
  };
  const nums = [2, 7, 11, 15];
  let target = 22;
  console.log(twoSum(nums, target));
  