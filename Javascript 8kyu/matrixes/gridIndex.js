//my solution
// function gridIndex(grid, indices) {
//     let newArr = grid.join('').replace(/,/g, '');
//     let word = []
// for (let i = 0; i < newArr.length; i++) {
//     for(let i = 0; i < indices.length ; i++) {
//         if(indices[i]) {
//         word.push(newArr[indices[i] - 1] );
//         }
//     }
//     return word.join('')
// }
// }

//clever solution
const gridIndex = (grid, indices) => {
    const flattened = grid.flat();
    console.log(flattened)
    return indices.map(i => flattened[i-1]).join('');
  }

console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
//assert.equal(results1, 'myexample');

console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6]))
///assert.equal(results2, 'mam');

console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8]));
//assert.equal(results3, 'mepl');

console.log(gridIndex([['h', 'e', 'l', 'l'], ['o', 'c', 'o', 'd'], ['e', 'w', 'a', 'r'], ['r', 'i', 'o', 'r']], [5, 7, 9, 3, 6, 6, 8, 8, 16, 13]));
//assert.equal(results4, 'ooelccddrr');

/**
 * join all the arrays of the matrix to be on wordd
 * split it into an array to loop through
 * loop through indices
 * if theres numbers in indices, push the letter of the index number - 1 because we are starting at 0 with our new array word.
 * at the end join the arr of new words
 */

/**
 * I learned the flat method can be used to join matrix arrays into one 
 * once I have one array I can map through the indices array & grab the index of the the new variable -1. 
 * I then want to join the elements to get the string in return
 */