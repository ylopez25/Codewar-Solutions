/**
 * JavaScript Arrays support a filter function (starting in JavaScript 1.6).
 *  Use the filter functionality to complete the function given.
 */
//my solution
function getEvenNumbers(numbersArray){
return numbersArray.filter(x => x % 2 ===0 ) ? numbersArray.filter(x => x % 2 ===0 ) : []
  }

  //clever solution
//   function getEvenNumbers(numbersArray){
//     return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
//   }
 console.log(getEvenNumbers([1,2,3,6,8,10]))//, [2,6,8,10])
 console.log(getEvenNumbers([1,2]))//, [2])
 console.log(getEvenNumbers([12,14,15]))//, [12,14])
 console.log(getEvenNumbers([13,15]))//, [])
 console.log(getEvenNumbers([1,3,9]))//, [])

 /**
  * Yesi Pseudo
  * create a conditional that will give me even numbers else an empty arr
  */