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