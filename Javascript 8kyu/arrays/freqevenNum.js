//Return most freq num if two of same return smallest else return -1

var mostFrequentEven = function(nums) {
    let newNums = nums.filter(el=> el%2 === 0);
    //create an obj w frequency
    let freq={};
    for(let el of newNums) {
        if(freq[el]) {
            freq[el] ++
        }else {
            freq[el] =1
        }
    }
    
    console.log(freq)
    //loop through values and return key of max value
    //create if statement if max is found return max key
    //if none return -1
    let vals = Object.values(freq)
    let max = Math.max(...vals)
    console.log(max)
    let arr =[]
    // create an array of el w keys of max value
    for(let el in freq) {
        if(freq[el] === max) {
            arr.push(el)
        }
    }
    
    return arr.length >=1 ? arr[0] : -1
    };