/*

****Clarifying****

Given a string array ```words```, _return an array of all characters that show up in all strings_ within the ```words``` (including duplicates). You may return the answer in **any order**.


**Example 1:**
```
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
```
**Example 2:**
```
Input: words = ["cool","lock","cook"]
Output: ["c","o"]

**** Test Case ****

Happy Case
input: ["string","string"]
output: ["string", "string"]

**** BrainStorming ****

Method1) I can create a aplhabet set to contain all the letters and use that as a counter tracker. Then Loop thru array of strings and if the string contains matching letters with other strings then add it to a new array var to contain them.

*/

function findCommonChars(words) {
    var chars;
    console.log(chars)
    const result = [];
    //letter box
console.log(words)
    //words = [...words.sort((a,b)=>b.length - a.length)];
    console.log(words) 
    const countChars = (word, res = new Map()) => {
        for (const char of word) {
            res.has(char) && (!chars || chars.has(char)) ? 
                res.get(char)[0]++ : res.set(char, [1]);
        }
        return res;
    }
    chars = countChars(words.pop());
    const charCounts = words.map(word => countChars(word));
    for (let [char, count] of chars.entries()) {
        for (const word of charCounts) {
            if (word.has(char)) { count = Math.min(count, word.get(char)[0]) }
            else {
                count = 0;
                break;
            }
        }
        while (count--) { result.push(char) }
    }    
    return result;
}
  
  console.log(findCommonChars(["cool","lock","cook"]));