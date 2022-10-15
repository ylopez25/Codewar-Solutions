function birthday(s, d, m) {
    // Write your code here
 let count =0;
    let start =0;
    let length = m-1;
    let sum = 0;
    for(let i =0; i < s.length; i++) {
        sum += s[i];
       
        if(i >= length && sum !== d) {
            sum -= s[start];
            // start += 1
        }else {
            count +=1
        }
        
    }
    return count

}

console.log(birthday([1, 2, 1, 3, 2], 3,2))


// let num = s;
//   let nums = [];
//   let count = 0;
//  const s = [4];
// const d = 4;
// const m = 1;

// function birthday(s, d, m) {
//     let num = s;
//     let nums = [];
//     let count = 0;
//     const add = (arr) => arr.reduce((a, b) => a + b, 0);
//     for (let i = 0; i < s.length; i++) {
//       let arrayElement = num.slice(0 + i, m + i);
//       nums.push(arrayElement);
//     }
//     if(num.length===1 && num[0]===d){
//         count++;
//     }else{
//       nums.forEach((el) => {
//           if (add(el) === d) {
//             count++;
//           }
//         });
//     }
    
  
//     return count;
// }
// console.log(birthday(s, d, m));

