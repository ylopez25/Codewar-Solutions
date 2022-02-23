function bestPros(pros, k) {
  const result = [];
  for (let i = 0; i < pros.length; i++) {
    result.push(pros[i][0]);
  }
  const max = result.sort((a, b) => b - a);
  console.log(max[0]);

  const results = [];
  const newww = [];
  for (let j = 0; j < pros.length; j++) {
    pros[j] = (max[0] - pros[j][0]) * pros[j][1];
    results.push(pros[j]);
    newww.push(pros[j]);
    newww.sort((a, b) => b - a);
    const m = newww.slice(0, k);
  }

  let newR = [];
  for (let k = 0; k < newww.length - k; k++) {
    for (let l = 0; l < results.length; l++) {
      console.log(newww[k]);
      if (newww[k] === results[l]) {
        newR.push(l);
      }
    }
  }
  return newR;
}

console.log(
  bestPros(
    [
      [5, 4],
      [4, 3],
      [6, 5],
      [3, 5],
    ],
    2
  )
);
