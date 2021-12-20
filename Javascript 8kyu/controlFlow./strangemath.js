// function strangeMath(n, k){
//     let arr = [];
//     for(let i =1; i <= n;i++ ) {
//         arr.push(i)
//     }
//    arr.sort();
//    for(let i=0; i < arr.length; i++) {
//        if(arr[i] === k) {
//            return i + 1
//        }
//    }
// }

//refactored 
function strangeMath(n,k) {
let arr =[];
for(let i =1; i <= n; i++) arr.push(i);
return arr.sort().indexOf(k + 1)
}
console.log(strangeMath(11, 2)) //, 4);
console.log(strangeMath(15, 5)) //, 11);
console.log(strangeMath(15, 15)) // 7);

/**
 * Yesenia's pseudo code
 * I have a number of integers in an array
 * I have k which represents the number we want to find in the new sorted array
 * we want to return the location of k
 * I will sort n
 * loop through sorted n and find value k
 * return the index 
 */

/**
 * New and improved Pseudo
 * Create a loop starting with 1, with length of less than or equal to n because n is inclusive
 * push the numbers into the array
 * sort the array lexicographically
 * loop through sorted array and find the index of k + 1 because we want the position not the index 
 */