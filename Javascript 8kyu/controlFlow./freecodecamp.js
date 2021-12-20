// function titleCase(str) {
// 	let newStr = str.toLowerCase().split(' ');
//     let newnew = [];
// 	console.log(newStr);
// 	for (let i = 0; i < newStr.length; i++) {
// 		newnew.push(newStr[i].substring(0, 1).toUpperCase() + newStr[i].substring(1, newStr[i].length).toLowerCase());
//         console.log(newnew)
// 	}
// 	return newnew.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase('sHoRt AnD sToUt'));
// console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));

// function frankenSplice(arr1, arr2, n) {
// let newArr = [...arr2]
// newArr.splice(n,0, ...arr1);
// console.log(newArr)
// return newArr
// }

// console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]

function bouncer(arr) {
//    return arr.filter(Boolean)
let newArr = [];
for(let i = 0 ; i < arr.length; i ++) {
    if(arr[i]) {
newArr.push(arr[i])
    }
}
return newArr
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));