/**
 * You will be given an array of numbers.
For each number in the array you will need to create an object.
The object key will be the number, as a string. The value will be the corresponding character code, as a string.
Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
 */

/**
 * Yesi Pseudo 
 * We are given an array of numbers 
 * I need to convert the number into str and create an obj 
 * obj key will be the number and the value will be corresponding string in charcode
 * return arr of obj 
 * first i will iterate through the arr of nums
 * then for each el return the str char
 * 
 */
// function numObj(s){
//     const arr=[];
//     s.map(v=>arr.push(String.fromCharCode(v)))
//     const obj=Array.from({length:s.length},x=>x={});
//     obj.map((v,i)=>v[s[i]]=arr[i])
//     return obj
// }


function numObj(s) {
    return s.map(n => {
        return {[n] : String.fromCharCode(n)}
    })
}
console.log(numObj([118,117,120])) //,[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
console.log(numObj([101,121,110,113,113,103])) //,[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]); 
