function matrixAddition(a, b){
    let newMatrix = [];
    let row = a.length;
    let col = a[0].length;
    for(let i = 0; i < row; i++) {
      const rows = [];
    for(let j =0; j < col; j++) {
       rows.push(a[i][j] + b[i][j])
      }
       newMatrix.push(rows)
    }
    return newMatrix
  }