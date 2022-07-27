//Given an array of integers and a number representing the length
//find the maximum sum of contiguous numbers in the array equal to the length of the number 

// examples: [1,2,3,4,5], 2 => 9

//pseudo code
//we want to keep track of sum 
//we want the length of the loop to be equal to provided;
//once we loop we want to make sure we add the numbers of that length and assigning it to max
//then we subtract the value of the index from the sum and check if the sum is still max 
//if its not then reassign the max and continue checking the sum of the provided length;

function maxSumOfElements(arr, length) {
//track sum
let max =0;
let i =0;
let sum = 0;
while(i < length) {
    sum = sum + arr[i];
    i++;
}
max = sum;
i = length;

while(i < arr.length) {
    sum += arr[i] - arr[i-length];
    if(sum > max) {
        max = sum;
    }
    i++;
}
return max;
}
let arr = [8, 14,3,4,19,81,17];
let maxSum = maxSumOfElements(arr, 4);
console.log(maxSum)