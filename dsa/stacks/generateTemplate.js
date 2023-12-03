var generateParenthesis = function(n) {
const result = [];
 breathFirstSearch("", 0, 0);
 return result;


 function breathFirstSearch(str, left, right) {
   if (left === n && right === n) {
     result.push(str);
     return;
   }
   if (left !== n) {
     breathFirstSearch(str + "(", left + 1, right);
   }
   if (left > right) {
     breathFirstSearch(str + ")", left, right + 1);
   }
 }
};
//breadth first search method!!!

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]


// Input: n = 1
// Output: ["()"]