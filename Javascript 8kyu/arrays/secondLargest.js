/*
Write a function that accepts an array of integers as input, and returns the second-largest value in that array.

*/

/*
sort the array 
return arr.length - 2

//
Create variable for largest
variable second largest
create a loop that will compare el the largest
reassign the largest 
compare the el to second largest and largest 
*/
// Number.NEGATIVE_INFINITY;
// function secondLargest(arr) {
//     let largest = Number.NEGATIVE_INFINITY;
//     let secLargest = Number.NEGATIVE_INFINITY;
//     for(let i =0; i < arr.length; i++) {
//       if(arr[i] > largest) {
//         largest = arr[i];
//       }else if (arr[i] > secLargest && arr[i] < largest) {
//         secLargest = arr[i]
//       }
//     }
//     return secLargest
//   }
  
//   let arr1 = [-18,-11,4,5,3, 1]
//   console.log(secondLargest(arr1))


function findSecondBiggestNumber (integers) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
    for(let i =0; i < integers.length; i++) {
      if(integers[i] > largest) {
        largest = integers[i];
      }else if(integers[i] > secondLargest && integers[i] < largest || integers[i] === largest) {
        secondLargest = integers[i]
      }
    }
    return secondLargest 
  }
  
 // console.log(findSecondBiggestNumber([1,2]) === 1)
    console.log(findSecondBiggestNumber([1,2,3]) === 2)
  
  console.log(findSecondBiggestNumber([1,2,3,4]) === 3)
  
  console.log(findSecondBiggestNumber([5,4,3,1,2]) === 4)
  
  console.log(findSecondBiggestNumber([4,3,2,1]) === 3);
  
  console.log(findSecondBiggestNumber([4,4,4,1]) === 4)
  
  console.log(findSecondBiggestNumber([-1, -2, -3]) === -2)
  