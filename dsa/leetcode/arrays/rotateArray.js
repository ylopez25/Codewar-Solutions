// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const revNums = (nums, start, end) => {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
var rotate = function(nums, k) {
 k = k % nums.length ;
    nums.reverse();
    
    revNums(nums, 0, k-1);
    revNums(nums, k, nums.length -1);
    
};