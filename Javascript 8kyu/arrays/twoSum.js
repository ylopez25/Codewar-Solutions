//two pointers
// const twoSum = (numbers, target) => {
//   let left = 0;
//   let right = numbers.length - 1;
//   while (left < right) {
//     const sum = numbers[left] + numbers[right];
//     if (sum === target) {
//       return [left, right];
//     }
//     if (sum < target) left++;
//     if (sum > target) right--;
//   }
// };


function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++){
     for(let j = i + 1; j < nums.length; j++){
       if(nums[i] + nums[j] === target){
         return [i, j]
       }
     }
   }
   return null;
 }

console.log(twoSum([1, 2, 4, 6], 3));
console.log(twoSum([1, 2, 3, 4, 5, 6], 8));
