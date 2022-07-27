var maxSubArray = function(nums) {
    //we want a max sum anc current sum to keep track and compare
    let maxSum = -Infinity;
    let currentSum = 0;
    
    //create a for loop that iterates through nums and adds the valued to equal current
    for(let i =0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum;
};
//ex 1
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

//ex2
// Input: nums = [1]
// Output: 1

//ex3
//Input: nums = [5,4,-1,7,8]
// Output: 23