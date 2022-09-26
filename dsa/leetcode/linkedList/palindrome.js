var isPalindrome = function (head) {
    // Store all values from the linked list in an array
    let valuesFound = [];
    while (head) {
        valuesFound.push(head.val);
        head = head.next;
    }
    
    // Check if the list of values are a palindrome
    let left = 0;
    let right = valuesFound.length - 1;
    while (left <= right) {
        if (valuesFound[left] !== valuesFound[right]) {
            console.log(valuesFound[left])
            return false;
        }
        left++, right--;
    }

    return true;
};

console.log(isPalindrome([1221]))