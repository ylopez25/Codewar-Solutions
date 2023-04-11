
// function isomorphic(s,t) {
//     let obj = {
//     };
  
//     for(let i =0; i < s.length; i++) {
//       let keys = s[i];
//       let values = t[i];
//       if(obj[keys] != undefined && obj[keys] !== values)
//         return false;
//       obj[keys] = values;
//     }
//     return true;
//     console.log(obj)
//   }
//   console.log(isomorphic("egg","add")) //true
//   console.log(isomorphic("paper","title")) //true
//   console.log(isomorphic("foo","bar"))