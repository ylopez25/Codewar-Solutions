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
function secondLargest(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secLargest = Number.NEGATIVE_INFINITY;
    for(let i =0; i < arr.length; i++) {
      if(arr[i] > largest) {
        largest = arr[i];
        //secLargest comparison 
      }else if (arr[i] > secLargest && arr[i] < largest) {
        secLargest = arr[i]
      }
    }
    // console.log('largest', largest)
    // console.log('second largest', secLargest)
    return secLargest
        console.log(secLargest)
  }
  
  //let arr = [10,5,6,4,7]
  let arr1 = [-18,-11,4,5,3, 1]
  console.log(secondLargest(arr1))