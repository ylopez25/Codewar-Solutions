/**
 * A function that takes in two strings and returns 
 * true if the two strings are anagrams of each other
 * @param {string} str1 - the first string
 * @param {string} str2 - the second string
 * @returns { boolean }
 * 
 * Example: isAnagrams("taco", "coat"); // true
 * Example: isAnagrams("taco", "coats"); // false
 * Example: isAnagrams("taco", "cat"); // false 
 * Example: isAnagrams("coal", "local"); // false
 * 
 //if lengths are not equal return false;
//loop through str1 
//create an obj to store keys and track values 
//repeat this for str2
//loop through one of the obj2 and check if the key and the value exist and have equal values if so true else false
 */

function isAnagrams(str1, str2) {
    if(str1.length !== str2.length) return false;
  const obj1 = strToObj(str1);
  const obj2= strToObj(str2);
  
  //if I compare the values and the first el are equal it will stop but when we check if the values are different it will continue looping through the obj until the end or condition in if statement is false. 
  
    //my question is why does it give back true for the first test case when the return true is inside the for loop. Is it because it will stop once it hits true so it has to be outside the loop for it to iterate through whole obj
    
     for(let key in obj1) {
      if(obj1[key] !== obj2[key]) {
        return false;
      }
      // else {
      //   return true;
      // }
     }
     return true;
  }
  
  function strToObj(str) {
    const obj = {};
      for(let i =0; i < str.length; i++) {
      if(obj[str[i]]) {
        obj[str[i]] += 1;
      }else {
        obj[str[i]] = 1
      }
    }
    return obj;
  };
  
  console.log(isAnagrams('abza', 'abba') === false)
  console.log(isAnagrams('abba', 'bbba') === false)
  console.log(isAnagrams("taco", "coat") === true);
  console.log(isAnagrams("taco", "coats") === false );
  console.log(isAnagrams("taco", "cat") === false);
  console.log(isAnagrams("coal", "local") === false);
  


//OR

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
let newS = s.split('').sort().join('');
let newT = t.split('').sort().join('');
return (newS === newT);
};


console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'cat'))

/**
 * Yesi pseudo
 * I have a str that I want to compare to the other
 * I can create a sorted variable and if they are equal to eachother 
 * return true
 * else return false
 */

