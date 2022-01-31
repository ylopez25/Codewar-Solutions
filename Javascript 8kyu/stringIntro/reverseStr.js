let str = ["h", "e", "l", "l", "o"]; // o,l,l,e,h

const reserveString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
  return s.join("");
};

// const reserveString =(s)=>{
//  for(let left = 0, right = s.length-1; left < s.length/2; left++,right--){
//    [s[left],s[right]] = [s[right],s[left]]
//  }
// return s.join("")
// }

console.log(reserveString(str));
