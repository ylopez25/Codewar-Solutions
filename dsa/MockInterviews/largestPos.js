// Given an integer array ```nums``` that **does not contain** any zeros, find **the largest positive** integer ```k``` such that ```-k``` also exists in the array.

// Return _the positive integer_ ```k```. If there is no such integer, return ```-1```.

// **Example 1:**
// ```
// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.
// ```

// **Example 2:**
// ```
// Input: nums = [-1,10,6,7,-7,1]
// Output: 7
// Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.
// ```

// **Example 3:**
// ```
// Input: nums = [-10,8,6,7,-2,-3]
// Output: -1
// Explanation: There is no a single valid k, we return -1.
// ```


function largestPositive(arr) {
  let negAndPos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] * -1)) {
      negAndPos.push(arr[i])
    }
  }
  if(negAndPos.length === 0) return -1
  //spread takes all el from array
  return Math.max(...negAndPos)
}
//iterate through the arr
//arr.filter(el => el  )
//set a variable to the max num 
//check if -(max num) is also in the arr 


console.log(largestPositive([-1, 2, -3, 3])); //3
console.log(largestPositive([-1, 10, 6, 7, -7, 1])); //7
console.log(largestPositive([-10, 8, 6, 7, -2, -3])); // -1 

