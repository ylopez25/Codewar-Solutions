/**
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
 */

// function lastSurvivor(letters, coords) {
// let str = letters.split('')
// console.log(str)
// console.log(coords)
// for(let i =0; i < coords.length; i++) {
//         str.splice(coords[i],1)
//         console.log(str)
// }
// return str.join('')
// }

//refactored code:
function lastSurvivor(letters,coords) {
    let str = [...letters]
    console.log(str)
    for(let i of coords) str.splice(i,1);
    return str.join('')
}

console.log(lastSurvivor('kbvvvvc', [0,1])) 

/**
 * I have a str and need to know the index of each letter
 * I will turn str into array by using split('')
 * then I will delete based on coords array length
 * return the remaining letters in the str array by converting it back to str form using join('')
 */