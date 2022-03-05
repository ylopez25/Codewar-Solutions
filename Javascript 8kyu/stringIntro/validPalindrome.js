//Refactored
// var isPalindrome = function (s) {
//     const cleanString = s.replace(/\W/g, '').toLowerCase();
//   console.log(cleanString)
//     return cleanString === cleanString.split('').reverse().join('');
//   }

//two pointer solution
//const isPalindrome = (s) => {
//   s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   let left = 0;
//   let right = s.length - 1;

//   while (left <= right) {
//       if (s[left] !== s[right]) {
//           return false;
//         }
//         left++;
//         right--;
//   }
//   return true;
// };

//function isPalindrome(s) {
// let regex = s.toLowerCase().replace(/[\W_]/g, "");
// console.log(regex);
// let reversed = regex.split('').reverse().join('');
// console.log(reversed);
// if(regex === reversed) return true;
// return false;
// }




/**
 * Two Pointers:
 * two variables one left one right
 * they will be starting from indx 0 and last indx
 * create a while loop that checks if the characters in the str are equal
 * if not return false if true keep iterating
 * time complexity is O(n2)
 * space complexity is O(1)
 * 
 */


//0(n)

// function isPalindrome(s) {
//   let regex = s.replace(/[\W_]/g,"").toLowerCase();
//   let left = 0;
//   let right = regex.length -1;

//   while(left <= right) {
//     if(regex[left] !== regex[right])  {
//       return false
//     }
//     left++;
//     right--
//   }
// return true;
// }

//regex
// function isPalindrome(s) {
//   let newS = s.replace(/[\W_]/g, '').toLowerCase();
// if (newS.length === 0 || newS.length === 1) return true;

// if(newS[0] === newS[newS.length - 1]) {
//   return isPalindrome(newS.slice(1, newS.length -1))
// }
//  return false;

// }


/**
 * Yesi Pseudo
 * I want to create a variable that get rid of the nonnumerical symbols & turn it into lowercase
 * I want to reverse the str 
 * I want to check if the str is equal to reversed 
 * return true if yes and false otherwise
 */

//I considered using .reduce() or .every() but it just seemed like an overkill given the fact that you can’t break the iteration, which results in low performance. ` 



// function isPalindrome(s) {
//   let regex = s.replace(/[\W_]/g,"").toLowerCase();
//   let left = 0;
//   let right = regex.length -1;

//   while(left <= right) {
//     if(regex[left] !== regex[right])  {
//       return false
//     }
//     left++;
//     right--
//   }
// return true;
// }



function isPalindrome(s) {
  //get rid of any capital leters. and non numericalchar
  //use regex 
  //create two variables that will go from the ends of the s 
  //check if the char are the same using a while loop 
  //as long as the left is less thhan orr equal to right 
  // if not return false
  // left incriment
  //right decriment
  //return true if it reaches the end of the s

let regex = s.replace(/[\W_]/g, "").toLowerCase();
let left =0;
let right= regex.length-1;

while(left <= right) {
  if( regex[left] !== regex[right]) {
    return false;
  }
  left ++;
  right --;
}
return true;
} 
//console.log(isPalindrome(s))

console.log(isPalindrome(''))
console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car"));//false
console.log(isPalindrome("A man, a plan, a canal -- Panama")); //true
console.log(isPalindrome("hihih")); //true
console.log(isPalindrome('121'))//true

