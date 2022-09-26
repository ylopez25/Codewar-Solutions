function birthday(s, d, m) {
    // Write your code here
 let count =0;
    let start =0;
    let length = m-1;
    let sum = 0;
    for(let i =0; i < s.length; i++) {
        sum += s[i];
       
        if(i >= length && sum !== d) {
            
            sum -= s[start];
            start += 1
        }else {
            count +=1
        }
        
    }
    return count

}

console.log(birthday([1, 2, 1, 3, 2], 3,2))