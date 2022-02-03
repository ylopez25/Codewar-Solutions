  // Write a recursive function that determines whether or not an input String contains the letter 'a'.
// function recursive(s) {
//   if(!s) return false;
//   let sLowerCase = s.toLowerCase();
//   for(let i =0; i < sLowerCase.length;i++){
//     if(sLowerCase[i] === 'a') {
//       return true;
//     }
//   }
//   return false;
// }

/**
 * 1) recursive("stra")
 * 2) recursive("tra")
 * 3) 
 */
function recursive(s) {
    console.log(s)
  if (!s) return false;
  if(s[0].toLowerCase() === 'a') {
    return true;
    } else if(s.length === 0) {
    return false
  }
    //return true;
    return recursive(s.substr(1));
  
  
  }
  
  
  //console.log(recursive('yesenia'))
  console.log(recursive('Justin'))