// var isPalindrome = function(x) {
//     let reversed = String(x).split('').reverse().join('');
//     return (x === Number(reversed)) ? true : false;
        
//     };

// console.log(isPalindrome(121))

/**
 * don't convert it into str
 * -use modulo
 * -
 */

 var isPalindrome = function(x) {
let char1 = 0;
let char2= x.length -1;
if(x.length === 1) return true;
while(char1 < char2) {
   if(x[char1].toLowerCase() !== x[char2].toLowerCase()) {
    return false;
    char1++;
    char2--;
   }
   return true;
}
//recursion
// if(str.length === 1) return true
// if(str[0] === str[str.length -1]) {
//     return isPalindrome(str.slice(1,-1))
// }
// return false;

//     let reversedStr = '';
//     for(let i = str.length -1 ; i >= 0 ; i-- ) {
//       let char = str[i].toLowerCase();
//       if(char >= 'a' && char <= 'z' )
//       reversedStr += char;
  
//     }
//   let newStr = '';
//     for(let i = 0; i < str.length; i++) {
//       let char= str[i].toLowerCase();
//       if(char >= 'a' && char <= 'z') {
//         newStr += char
//       }
//     }
//     console.log(newStr , 'newStr')
//   return reversedStr === newStr
        
    };

console.log(isPalindrome('hih'))
