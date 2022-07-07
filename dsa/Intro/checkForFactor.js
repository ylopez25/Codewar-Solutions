//is it a factor of base?
//return true or false
//factors are numbers you can multiply to get another num
//find them by dividing num and remainder should be 0


//pseudo
//if modulo is 0 return false

function checkForFactor (base, factor) {
return base % factor === 0
}

console.log(checkForFactor(10, 2));