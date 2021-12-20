//const none = (array, fun) => !array.some(fun)

function none(arr, fun) {
    return !arr.some(fun)
} 
console.log(none([1,2,3,4,5],function(item){ return item > 5 })) //, true)
console.log(none([1,2,3,4,5],function(item){ return item > 4 })) //, false)

/**
 * Yesis pseudo code
 * check if none of the elements in arr are true to function
 * if some are return true
 */