var isPalindrome = function(s) {
    // let palindrome = s.split(' ').join().replace(/[^A-Za-z0-9]/g, "").toLowerCase().split('');
    // return palindrome.join() === palindrome.reverse().join()
let palindrome = s.replace(/\W/g, '').split('').reverse().join('').toLowerCase();
console.log(palindrome)
return palindrome === palindrome.split('').reverse().join('')
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome('race a car'))
console.log(isPalindrome("A man, a plan, a canal -- Panama"))