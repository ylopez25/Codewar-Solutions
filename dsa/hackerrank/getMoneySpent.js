function getMoneySpent(b, keyboards,drives) {
 let budget = Math.max(...b);
 console.log(budget);

 let maxSum = [];
 for(let i =0; i < keyboards.length; i++) {
     for(let j=0; j < drives.length; j++) {
        if(keyboards[i] +drives[j] <= budget) {
            maxSum.push(keyboards[i] +drives[j])
        }
    }
 }

 console.log()
 if(maxSum === 'undefined' || maxSum.length === 0) {
    return -1
 }else {
    return Math.max(...maxSum)
 }
}
console.log(getMoneySpent([10, 2, 3],[3, 1],[5, 2, 8])) //9
//iterate through b and get the highest num
//create a variable to hold max sum of drives and keyboards
//set conditions that check if the sum is too high, if it's not return max
