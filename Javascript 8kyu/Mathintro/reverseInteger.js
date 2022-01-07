//string reversal
// var reverse = function(x) {
//     //we dont need to use parseInt for JS
//     //We need Math.absolute because it will convert any number to positive
//     //use toString() to split into arr of char and reverse it and then join
//     let str = Math.abs(x).toString().split('').reverse().join('');
//     //This takes care of the number being 2**31 
//     if(str > 2**31) return 0;
//     //return the reversed str with the correct sign of the original num passed in
//     //Math.sign() method return either positive or negative 
//     //we multiply the str with Math.sign(x) because we know the method will return 1 or -1
//     //once we have multiply we get the reserved number with the appropriate sign



//     return str * Math.sign(x);
// }

// run time is 135 ms
//memory is 40.4 mb
//num reversal

function reverse (x) {
    //create a boolean that will check if num is pos or neg
    let bool = x<0 ? true :false;

    //check if negative then convert to positive
    if(bool) {
        x = x * -1
    }
    //create a var to equal 0 and 
    let reversed = 0;
    //while 
    while (x >0) {
        reversed = (reversed * 10) + (x%10);
        //0*10 = 0 + 123%10 = 3 => 3
        //3*10 = 30 + 
        console.log(reversed)
        x=parseInt(x/10);
    }

    if(reversed > 2**31) {
        return 0;
    }
return bool ? reversed * -1 : reversed
}
console.log(reverse(-123))

// Runtime is 84 ms
// memory is 35.8mb
