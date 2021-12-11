/**
 * 
 *For every good kata idea there seem to be quite a few bad ones!
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
 If there are one or two good ideas, return 'Publish!',
  if there are more than 2 return 'I smell a series!'. 
  If there are no good ideas, as is often the case, return 'Fail!'.
 */

// function well(x) {
//     let sum = []
//     for(let i =0; i < x.length; i++) {
//         if (x[i] === 'good') {
//             sum.push(x[i])
//             console.log(sum.length)
//         }
//     }
//     return (sum.length === 1 || sum.length === 2) ? 'Publish' : sum.length > 2 ? 'I smell a series' : 'Fail!'
// }


//refactored code:

function well(y) {
    return (y.filter(x => x === 'good').length < 1) ? 'Fail!' : (y.filter(x => x === 'good').length > 2) ? ' I smell a series!' : 'Publish!'
}


console.log(well(['bad', 'bad', 'bad']))// 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))// 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))//'I smell a series!'

/**
 * Yesenias pseudo code
 * I have an array and need to check if it has good or bad news
 * I will iterate through the array and if 'good' appears one or twice return 'Publish';
 * if 2 or more 'good' return 'I smell a series
 * else reurn 'Fail!'
 * 
*/

