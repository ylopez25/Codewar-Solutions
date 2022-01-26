
/**
 * Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
 */

 function reverse(str){
  let newStr = str.split(' ');
  console.log(newStr)
  for(let i =0; i < newStr.length; i++) {
      if(i % 2 === 1) {
   newStr[i] = newStr[i].split('').reverse().join('')
      }else {
      newStr[i]
      }
  }
  return newStr.join(' ')
  }

console.log(reverse("Reverse this string, please!")) // "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!")) //"I yllaer don't ekil reversing !sgnirts")

/**
 * Yesi pseudo code
 * I want to split (' ') the string 
 * then iterate through it. if odd index reverse else return the same
 */