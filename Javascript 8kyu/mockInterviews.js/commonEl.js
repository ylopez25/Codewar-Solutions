// # Common Elements Of Two Arrays

// Given two arrays, write a function that returns all elements that appear in both arrays.

// input [1,2,3], [3,4,5]
// output [3]


function commonElements(arr1,arr2) {
    const commonArr = [];
      for(let i = 0; i < arr1.length; i++) {
        for(let j =0; j < arr2.length; j++) {
          if(arr1[i] === arr2[j]) {
            commonArr.push(arr1[i])
          }
        }
      }
      console.log(commonArr)
      if(commonArr.length < 1) return null;
      return commonArr;
    }
    
    console.log(commonElements([2,3,4],[3,4,5]));
    console.log(commonElements([2],[3]));
    console.log(commonElements([1,2,3,3], [3,4,6]) === [3]);
    console.log(commonElements([1,2,3],[4,4]) === null)    