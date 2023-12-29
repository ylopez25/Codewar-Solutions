/*
hello! this is Mike
Hi! It's Yesi
Write a function that accepts a String as input and returns the character that appears most frequently in that String.

Examples:
mostFrequentChar("Hello World!!!!!!!!!!!!!") returns 'l'
mostFrequentChar("abacaba") returns 'a'
mostFrequentChar("xyyXz") returns 'x' (or y)
mostFrequentChar("") returns ''
mostFrequentChar("a b a b a") returns 'a' (not space)
*/

//split the string
//convert string to lower case
//regex /[^A-Za-z]/g, ''
//create an empty obj
//if the string length is less than 1 return empty string.
//set the letters as keys and the count as values
//iterate throught string and assign the char to the key in the obj
//if the char does not yet exist value = 1 and if it does value +=1
//we now look at the value of the obj we created a and compare the values
//create a for in loop to compare the value of the keys
//want a variable that keeps track of the highest value
//take the largest value and return the key

function mostFrequentChar(str) {
    let char = str.toLowerCase().replace(/[^A-Za-z]/g, '').split('');
    let charObj = {};
    let mostFreq = 0;
    for(let i =0; i < char.length; i++) {
      // let currentChar = char[i]
      // let val = charObj[char[i]]
      if(charObj[char[i]]) {
        charObj[char[i]] += 1
      } else {
        charObj[char[i]] = 1
      }
  console.log(charObj)
        //charObj[char[i]] = value
        // {}
        // char[0] 'h'
        // charObj[char[i]] => charObj['h'] => undefined
    }
   // console.log(char)
  }
  console.log(mostFrequentChar("Hello World!!!!!!!!!!!!!") === "l")
  console.log(mostFrequentChar("abacaba") === 'a')
  console.log(mostFrequentChar("xyyXz") === 'x')
  console.log(mostFrequentChar("") === '')
