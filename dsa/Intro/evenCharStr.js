// function evenChars(string) {
// const newArr= [];
// if(string.length < 2 || string.length > 100) return 'invalid string';
//     for(let i = 1; i < string.length; i++) {
//       if(i % 2 !== 0) {
//         newArr.push(string[i])
//         console.log(newArr)
//       }
//     }
//     return newArr
//   }

function evenChars(string) {
  return (string.length < 2 || string.length) > 100 ? 'invalid string' : [...string].filter((x,y) => y % 2 === 0)
}

  console.log(evenChars('a'))
  console.log(evenChars('yesi'))
  console.log(evenChars('yesenia'))