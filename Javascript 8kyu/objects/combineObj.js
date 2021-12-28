/**
 * Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

Ex:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
 */


    function combine(...objects) {
      //create new obj
      let oneObj = {}
      //forEach method to 
      objects.forEach(obj => {
          for (const key in obj) {
              if (oneObj[key]) {
                  oneObj[key] += obj[key]
              } else {
                  oneObj[key] = obj[key]
              }
          }
      })
      return oneObj
  }

  
  const objA = { a: 10, b: 20, c: 30 }
  const objB = { a: 3, c: 6, d: 3 }
  const objC = { a: 5, d: 11, e: 8 }
  const objD = { c: 3 }

console.log(combine(objA, objB)) //{ a: 13, b: 20, c: 36, d: 3 }
console.log(combine(objA, objC)) //, { a: 15, b: 20, c: 30, d: 11, e: 8 }
console.log(combine(objA, objB, objC)) //, { a: 18, b: 20, c: 36, d: 14, e: 8 }
console.log(combine(objA, objC, objD)) // { a: 15, b: 20, c: 33, d: 11, e: 8 }


/**
 * Yesi Pseudo
 * I want to create an obj that will combine all the objs keys and if they have the same key add the values
 * new obj
 * iterate through obj and check if there are keys in 
 */