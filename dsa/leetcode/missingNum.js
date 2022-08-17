var missingNumber = function(nums) {
//  const gSum = (nums.length * (nums.length +1)) /2;
//  console.log(gSum)
//  const nSum = nums.reduce((acc,el) => acc + el, 0);
//  console.log(nSum)
//  return gSum - nSum;

let numSum = 0;
let currSum = 0;
for(let i =0; i < nums.length +1; i++) {
    currSum += i;
    console.log(currSum);
    numSum += i < nums.length ? nums[i] : 0;
    console.log(numSum)
}

return currSum - numSum
}

console.log(missingNumber([3,0,1]));
// console.log(missingNumber([0,1]));
// console.log(missingNumber([0]));
// console.log(missingNumber([1]));