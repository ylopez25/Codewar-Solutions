/**
 * Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
 */

// function remainder(a, b){
//     // Divide the larger argument by the smaller argument and return the remainder
//     let remainder = 0;
//     if(a > b) {
//         remainder = a % b;
//         console.log(remainder)
//     }else {
//         return NaN
//     }
//     return remainder
//   }


  function remainder(a,b) {
      return (a>b) ? a % b : b % a
  }
console.log(remainder(8, 10))
  /**
   * Pseudo
   * I have two integers
   * I want to return the remainder of he larger num divided by small num
   * if 0 return NaN
   * if a > b divide
   * return remainder variable 
   * else return 0 
   */