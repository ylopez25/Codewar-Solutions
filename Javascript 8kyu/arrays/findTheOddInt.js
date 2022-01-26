/**
 *  Yesi Pseudo
 * create an object that will take elements as keys
 * if the key already exists add 1
 * then check if the value in the object is odd
 * return the first
 *  */
function findOdd(A) {
  const obj = {};
  let oddInt = 0;
  console.log(obj);
  for (let i = 0; i < A.length; i++) {
    if (obj[A[i]]) {
      obj[A[i]] += 1;
    } else {
      obj[A[i]] = 1;
    }
  }
  for (let keys in obj) {
    console.log(obj[keys]);
    if (obj[keys] % 2 == 1) {
      oddInt = Number(keys);
    }
  }
  return oddInt
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5);
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //, -1);
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); //, 5);
// console.log(findOdd([10])); // 10);
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); //, 10);
// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); //, 1);
