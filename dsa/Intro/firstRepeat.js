function firstNonRepeated(s) {
    for(var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i]
    }
  }
  return null
}
    console.log(firstNonRepeated('teeter')) //e

    //best solution
//     const firstNonRepeated = s =>
//   [...s].find(val => s.indexOf(val) === s.lastIndexOf(val)) || null;

//leetcode 
var firstUniqChar = function(s) {
    
  const letterCounter = {}

for(const letter of s) {
  console.log(s)
  if(letterCounter[letter]) letterCounter[letter]++
  else letterCounter[letter] = 1
}
console.log(letterCounter)

for( let i = 0; i < s.length; i++) {
  const stringLetter = s[i]

  if (letterCounter[stringLetter] === 1) {
      return i
  }
}

return -1
   
};

console.log(firstNonRepeated("leetcode"))