function sumXor (n) {
        // Write your code here
        let count = 0; // Initialize count variable to 0

        let bitStr = n.toString(2); //convert decimal integer to a binary string
        console.log(bitStr)
        for (let i=0; i < bitStr.length; i++){
            if (bitStr[i] === '0'){
                count++;
                console.log(count)
            }
            
            if (n === 0){
                count = 0; 
                console.log(count)
            }
        }
        console.log(Math.pow(2,count))
        return Math.pow(2, count)
}

console.log(sumXor(4) === 4)