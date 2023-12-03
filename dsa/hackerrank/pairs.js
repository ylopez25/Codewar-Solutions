// Task:- Given an array ‘arr’ and an integer ‘k’. Find the number of pairs whose difference is equal to value k.

// For eg:- arr = [ 4, 6, 8, 10, 7] and k = 2.

// The pairs which satisfy the conditions are (4, 6), (6, 8), (8, 10).

// So the answer is 3.

// Note that (6, 4), (8, 6) is the same as (4, 6) and (6, 8) and we do not count them as different pairs.

// Brute Force Approach:- Check for each pair possible whether the difference between them is k or (-k). If it is increment the count.

// To check all possible pairs, we can simply use two for loops. Let’s say outer for loop uses ‘i’ and inner for loop uses ‘j’ variable. i ranges from 0 to (n-1) and the inner for loop starts from (i+1) and proceeds till the last index i.e- (n-1) where n is the length of array.

// The time complexity of this approach is O(N²) as for N elements, we traverse the array linearly ( O(N) ). The space complexity is constant i.e- O(1) as we just create one variable to keep the count.

function pairs (k,arr) {
//we want iterate twice 
//i will be at index 0
// j will be at index 1
//it will check abs diff of each and if it equalls k add to count
let count =0;
for(let i =0; i < arr.length;i++) {
    console.log(arr[i])
    for(let j =i+1;j <arr.length;j++) {
        if(Math.abs(arr[i] - arr[j]) === k) {
            count++
        }
    }
}
return count;
}
console.log(pairs(2,[ 4, 6, 8, 10, 7]))