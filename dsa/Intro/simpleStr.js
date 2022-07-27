
function solve(s){
//works
//   let upCount = s.match(/[A-Z]/g).length;
//   let lowCount = s.match(/[a-z]/g).length;
//   let numCount = s.match(/\d/g).length;
//   let special = s.length - (upCount + lowCount + numCount);

  
//   return [upCount, lowCount, numCount, special]

  //inprogress

    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
     let upCount = 0;
     let lowCount = 0;
     let numCount = 0;
     let special = 0;
     for(let i = 0; i < s.length; i ++) {
       if(s[i] === s[i].toUpperCase() && isNaN(s[i]) && s[i] === format.test(s[i])) {
        console.log(s[i].toUpperCase())
         upCount = upCount +1 
         console.log(upCount)
       }else if (s[i] === s[i].toLowerCase()) {
         lowCount = lowCount + 1
       }else if (s[i] === Number(s[i])) {
         return numCount +1
       }else return special + 1;
     }
     
     return [upCount, lowCount, numCount, special]
   }

   console.log(solve("*'&ABCDabcde12345"))