//GO OVER THIS
var countAndSay = function(n) {
function countRepeats(word) {
    let count = 0, i = 0;
    let number = word[0];
    let result = '';
    for (i = 0; i < word.length; i++) {
        if (word[i] === number) {
            count++;
        } else {
            result += count + word[i-1];
            count = 1;
            number = word[i];
        }
    }
    return result + count + word[i-1];
}

let lastResult = '1';
for (let i = 1; i < n; i++) {
    lastResult = countRepeats(lastResult);
}

return lastResult;
}

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":