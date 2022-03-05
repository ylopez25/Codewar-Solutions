var isPalindrome = function(x) {
    let reversed = String(x).split('').reverse().join('');
    return (x === Number(reversed)) ? true : false;
        
    };

console.log(isPalindrome(121))

/**
 * don't convert it into str
 * -use modulo
 * -
 */