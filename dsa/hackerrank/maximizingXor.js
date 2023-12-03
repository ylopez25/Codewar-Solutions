function maximizingXor(left, right) {
  let xor = 0;
  for (let i = left; i <= right; i++) {
    for (let j = left; j <= right; j++) {
      xor = Math.max(i ^ j, xor);
      if ((i ^ j) > xor) {
        xor = i ^ j;
      }
    }
  }
  return xor;
}

console.log(maximizingXor(11,12));
