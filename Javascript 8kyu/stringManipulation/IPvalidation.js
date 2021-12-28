// function isValidIP(str) {
//     let regex = new RegExp(/^(([0-9]{1,3}\.){3}[0-9]{1,3})$/);
//     if(regex.test(str)){
//         let arInput = str.split(".")
//         for(let i of arInput){
//             if(i.length > 1 && i.charAt(0) === '0')
//                 return false;
//             else{
//                 if(parseInt(i) < 0 || parseInt(i) >=256)
//                    return false;
//             }
//         }
//     }
//     else
//         return false;
//     return true;
// }
const isValidIP = str=> {
    let params = str.split('.');
    return params.length === 4 &&
        params.every(param=>Number(param) < 256 && String(Number(param)) === param);
};


//pass
console.log(isValidIP("0.0.0.0")) //, true);
console.log(isValidIP("12.255.56.1")) //, true);
console.log(isValidIP("137.255.156.100")) // true);
console.log(isValidIP('abc.def.ghi.jkl')) //, false);
console.log(isValidIP('256.1.2.3')) //, false);
console.log(isValidIP('123,45,67,89')) // false);
console.log(isValidIP(' 1.2.3.4')) //, false);
console.log(isValidIP('')) //, false);
console.log(isValidIP('123.456.789.0')) //, false);
 console.log(isValidIP('01.02.03.04')) //, false);
 console.log(isValidIP('12.34.56')) //, false);
 console.log(isValidIP('1.2.3.4.5')) //, false);
 console.log(isValidIP('1e0.1e1.1e2.2e2')) //, false);
console.log(isValidIP('1.2.3.4 ')) //, false);
 console.log(isValidIP('12.34.56.-7')) //, false);
 console.log(isValidIP('1.2.3.4\n')) //, false);
console.log(isValidIP('\n1.2.3.4')) // false);

/**
 * Yesis Pseudo
 * I have a number 
 * i want to split it by decimal
 * I want to iterate through the number and check if the length between each "." is less than or equal to 4
 * I want to check if there is a total of 3 decimal
 * I want to check if the first section of the decimal has a zero on the first index
 * I want to join if not false 
 */