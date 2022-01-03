/**
 * Check the 2 dimensional array
 * check for good and bad ideas 
 * 1 or 2 good ideas write publish 
 * 2 + write I smell a series 
 * no good ideas write fail;
 * case insensitive
 */

//my solution
// function well(x){
//     let count = 0;
// const flattened = x.flat()
// const arr = flattened.map(x => x.toLowerCase())
// console.log(arr)
// for(let i =0; i < arr.length; i++) {
//     if(arr[i] === 'good') {
//         count += 1
//         console.log(count)
//     }
// }
// return ( count === 1 || count === 2 ) ? 'Publish!' : (count > 2)? 'I smell a series!' : 'Fail!' 
// }

//clever solution 
function well(x){
    let count=0;
    x.map(v=>v.map(v=>String(v).toLowerCase()==='good'?count+=1:1))
    return count<1?'Fail!':count>2?'I smell a series!':'Publish!'
  }
console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']])) // 'Fail!');
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']])) //, 'Publish!');
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])) //, 'I smell a series!');