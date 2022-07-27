// Write a function that accepts an array of integers as input, and returns the second-largest value in that array.

// findSecondBiggestNumber([1,2]) === 1
// findSecondBiggestNumber([1,2,3]) === 2
// findSecondBiggestNumber([1,2,3,4]) === 3;

// findSecondBiggestNumber([5,4,3,1,2]) === 4;

// findSecondBiggestNumber([4,3,2,1]) === 3;

// findSecondBiggestNumber([4,4,4,1]) === 4;

// findSecondBiggestNumber([-1,-2,3,4]) === 3;
// findSecondBiggestNumber([-1, -2, -3]) === -2

function findSecondBiggestNumber (integers) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
      for(let i =0; i < integers.length; i++) {
        if(integers[i] > largest) {
          largest = integers[i];
        }else if(integers[i] > secondLargest && integers[i] < largest) {
          secondLargest = integers[i]
        }else if(integers[i] === largest) {
          secondLargest === integers[i]
        }
      }
      console.log(secondLargest)
      return secondLargest 
      
    }
    
    console.log()
    console.log(findSecondBiggestNumber([1,2]) === 1)
      console.log(findSecondBiggestNumber([1,2,3]) === 2)
    
    console.log(findSecondBiggestNumber([1,2,3,4]) === 3)
    
    console.log(findSecondBiggestNumber([5,4,3,1,2]) === 4)
    
    console.log(findSecondBiggestNumber([4,3,2,1]) === 3);
    
    console.log(findSecondBiggestNumber([4,4,4,1]) === 4)
    
    console.log(findSecondBiggestNumber([-1, -2, -3]) === -2)
    
    // good time to use the generic "str"
    function truncateString(str) {
      return str.slice(0, 8) + '...'
    }
    
    console.log(truncateString('Colin Jaffe'))
    
    function greet(names) {
      const greetings = []
      for (let i = 0; i < names.length; i++) {
        greetings.push('Hello, ' + names[i] + '!')
      }
      
      return greetings;
    }
    
    console.log(greet(['Colin', 'Bob', 'Yesenia']))