
function palindromeIndex(s) {
function isPalindrone(s) {
    let left =0;
    let right= s.length-1;
    while(left <right) {
        if(s[left] !== s[right]) {
            return false;
        }
    left++;
    right--
    }
return true;
}

let left =0;
let right = s.length -1;

while(left < right) {
    if(s[left] !== s[right]) {
        if(isPalindrone(s.slice(left+1,right+1))) {
            return left;
        }else if (isPalindrone(s.slice(left,right))) {
            return right;
        }else {
            return -1
        }
    }
    left++;
    right--;
}
return -1
};