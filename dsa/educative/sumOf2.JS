let findSumOfTwo = function(A, val) {
// for(let i =0; i < A.length; i++) {
//     for(let j = i+1; j < A.length; j++) {
//         if(A[i] + A[j] === val) {
//             return true;
//         }
//     }
// }
// return false


  };
//In order to see if there is a number that will complete the value we can take the value and subtract each el, if the return is found in that element we can return true;
//step 1: create a hashmap
//step 2: check if the val-el is in the obj, if it is return true
//step3: if its not add the el into the object
//step4: finally return false
  console.log(findSumOfTwo([5, 7, 1, 2, 8, 4, 3], 8));
  console.log(findSumOfTwo([3, 20, 1, 2, 7], 21));