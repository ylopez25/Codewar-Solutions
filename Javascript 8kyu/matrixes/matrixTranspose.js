function transpose(matrix) {
   // let newArr = [];
// for(let i =0; i < matrix.length; i++) {
//     console.log(matrix[i][0 + 1])
//     for(let j = 0 ; j < matrix[i].length; j++) {
//         console.log(matrix[i][j])
//     }
// }


    let newMatrix = [];
      let row = matrix.length; //2
      let col = matrix[0].length; //3
      
      for(let j = 0; j < col;j++) {
        //less than 3 => 2
        //0,1,2
        console.log(j)
          const rows = [];
          for(let i =0; i < row; i++) {
// less than 2 => 1 => 0,1
            console.log(i);
            console.log(j)
            console.log(i,j)

          rows.push(matrix[i][j])

          //matrix[0][0] => matrix[1][0] => matrix[1][1] => matrix[1][1] etc...
        }
        newMatrix.push(rows)
      }
      return newMatrix
    
}

//console.log(transpose([[1]])) //, [[1]]); 
console.log(transpose([[1,2,3],[4,5,6]])); // [[1,4],[2,5],[3,6]]);