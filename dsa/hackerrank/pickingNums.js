function pickingNumbers(a) {
    // Write your code here
let maxLength = 0;
//count the nums that are contiguous and then set 0 again and compare it to max
for(let i=0; i < a.length;i++) {
    if(a[i+1] - a[i] <= 1) {
        maxLength +=1;
    }else {
        maxLength = 0;
    }
}

return maxLength
}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))