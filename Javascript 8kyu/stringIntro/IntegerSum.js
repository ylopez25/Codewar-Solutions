// difference between the product 
// function solution(n) {
// let product = 0;
// let sum = 0;
// let num = n.toString().split('')
// //let length = num.length;
// product = num.reduce((a,b) => Number(a) * Number(b));

// sum = num.reduce((a,b) => Number(a) + Number(b));
// console.log(product - sum)
// return product 

// }
// console.log(solution(123456)) // 
// console.log(solution(234567))

function longest_palindrome(s) {
    if (s === "") {
      return "";
    }
    let arr = [];
    let _s = s.split("");
    for (let i = 0; i < _s.length; i++) {
      for (let j = 0; j < _s.length; j++) {
        let word = _s.slice(0, j + 1).join("");
        let rev_word = _s
          .slice(0, j + 1)
          .reverse()
          .join("");
        if (word === rev_word) {
          arr.push(word);
        }
      }
      _s.splice(0, 1);
    }
    let _arr = arr.sort((a, b) => a.length - b.length);
    for (let i = 0; i < _arr.length; i++) {
      if (_arr[arr.length - 1].length === _arr[i].length) {
        return _arr[i];
      }
    }
  }
  
  longest_palindrome('bbaaacc')
  //This code will give you the first longest palindrome substring into the string


console.log(longest_palindrome('aaabb'))