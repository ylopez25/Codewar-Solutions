// const all = (array, fun) => array.every(fun)

function all (arr, fun) {
    return arr.every(fun) ? 'true' : 'false'
}

console.log(all([1,2,3,4,5], function(v){return v<9})) // true)
console.log(all([1,2,3,4,5], function(v){return v>9})) // false)

/**
 * Yesis pseudo
 * if the array put into the argument meeting the criteria of fun return true
 * else false
 *  */