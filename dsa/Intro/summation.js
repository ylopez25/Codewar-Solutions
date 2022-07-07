var summation = function (num) {
  //we want to get all the numbers before num
  //we want to decriment
  //and iterate through that array to get sum
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;

  //  return (num > 1) ? num + summation(num - 1):num;
};

console.log(summation(5));
