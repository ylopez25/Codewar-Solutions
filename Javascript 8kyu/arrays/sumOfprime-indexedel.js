function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}
function total(arr) {
  var sum = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

console.log(total([])); //,0);
console.log(total([1, 2, 3, 4])); //,7);
console.log(total([1, 2, 3, 4, 5, 6])); //,13);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8])); //21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); //,21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); //,33);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); //,47);
