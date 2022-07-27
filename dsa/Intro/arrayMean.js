var findAverage = function (nums) {
    // Code here
//iterate through arr 
//check if length is greater than 1
//if it is then loop and add numbers
//then divide by 
console.log(nums.length)
let sum = 0;
if (nums.length > 1) {
    for(let i =0; i < nums.length; i++) {
        sum = sum + nums[i];
        console.log(sum);
    }
    return sum / nums.length
}
return nums[0]
  }

  console.log(findAverage([1,2,4,5]))