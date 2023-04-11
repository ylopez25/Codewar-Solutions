function longestCommonPrefix(strs) {
    const firstStr = strs[0];
    console.log(firstStr)
    let str = "";
    for(let i = 1; i < strs.length; i++) {
        let j = 0;
        console.log(strs[i][j]) // first char of first str
        console.log(firstStr[j]) //check if we have letters at equal length
        while(firstStr[j] != undefined && strs[i][j] != undefined) {

            if(strs[i][j] == firstStr[j]) {
                str += strs[i][j]
            }else break;
            j++;
        }
        firstStr = str;
        str = '';

    }
    return firstStr;

}


// var longestCommonPrefix = function (strs) {
//     //comparing first word which will be strs[0]
//     let compare = strs[0];
// //str is going to hold the common letters in the word
//   let str = "";


//   for (let i = 1; i < strs.length; i++) {
//     let  j = 0;
//     while(compare[j] != undefined && strs[i][j] != undefined) {
//         if(strs[i][j] == compare[j]) {
//             str += strs[i][j];
//         }
//         else break;
//         j++;
//     }
//     compare = str;
//     str = "";
//   }

//   return compare;
//   };

  
console.log(longestCommonPrefix(["flower","flow","flight"]))