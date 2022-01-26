var detectCapitalUse = function (word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      count += 1;
    }
  }
  return count === word.length || (count === 1 && word[0] === word[0].toUpperCase()) || count === 0;
};

console.log(detectCapitalUse("Leetcode"));
console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("detou"));

/** 
 * Create a counter to keep track of the capital letters, 
 * iterate through word 
 * return if count is equal to word length
 * if only first letter is capital and count is 1
 * if count is 0
 */