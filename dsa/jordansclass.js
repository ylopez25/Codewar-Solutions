function findDigits(n) {
    // Write your code here
    let str = n.toString().split('');
    let count = 0;
    console.log(str)
    
    for(let i = 0 ; i < str.length; i++) {
        console.log(Number(str[i]))
        if(n % Number(str[i]) === 0) {
            count = count +1
        }
    }
    return count;
}

console.log(findDigits(111))