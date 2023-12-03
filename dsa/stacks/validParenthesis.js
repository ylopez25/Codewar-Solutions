// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
var isValid = function(str) {
    let openersAndClosers = {
   "(": ")",
   "[": "]",
   "{": "}",
 }
 let openers = [];
 //[  ( ] 
 for (let i = 0; i < str.length; i++) {
   if (Object.keys(openersAndClosers).includes(str[i])) {
     openers.push(str[i])
   }
   if (Object.values(openersAndClosers).includes(str[i])) {
     let opener = openers.pop();
     if (opener === undefined) return false;
     if (openersAndClosers[opener] !== str[i]) return false;
   }
 }
 return (openers.length === 0);
}

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false