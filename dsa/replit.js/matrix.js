let matrix = [
    [1,2,4,5],
    [5,2,8,6],
    [0,5,9,1],
    [3,5,2,2]
  ]
  
  // 1. console.log each element in the array
  
  
  // for(let i=0;i<matrix.length;i++){
      
  //     let row = matrix[i];
  //     for(let j=0;j<row.length;j++){
  //         console.log(row[j]);
  //     }
  // }
  
  // 2. find the max value in the matrix 
  
  // const findGreatestValueInMatrix = (matrix) => {
  //   let greatestValue = matrix[0][0]
  //   for (const arr of matrix) {
  //     for (const num of arr) {
  //       if (num > greatestValue) {
  //         greatestValue = num
  //       }
  //     }
  //   }
  //   return greatestValue
  // }
  
  // const findMaxValueInMatrix = (matrix) => {
    
  //   let highestVal = -Infinity;
    
  //   for (let i = 0; i < matrix.length; i++) {
      
  //     for (let j = 0; j < matrix[i].length; j++) {
        
  //       if (matrix[i][j] > highestVal) {
  //         highestVal = matrix[i][j]
  //       }
  //     }
      
  //   }
  //   return highestVal;
  // }
  
  // let max = -Infinity;
  // for(let row = 0; row < matrix.length; row++){
  //    for(let col = 0; col < matrix[0].length; col++){
  //     if(matrix[row][col] > max){
  //       max = matrix[row][col]
  //     }
  //   } 
  // }
  
  // const maxValInMatrix = (matrix) => {
  //   return Math.max(...matrix.flat())
  // }
  
  
  // let max= -Infinity;
  
  // for(let i=0;i<matrix.length;i++){
  //     let row = matrix[i];
  //     for(let j=0;j<row.length;j++){
  //         if(row[j] > max){
  //           max = row[j]
  //         }
  //     }
  // }
  
  
  
  // 3. find the greatest sum of any two horizontally consecutive numbers
  
  
  // let matrix = [
  //   [1,2,4,5],
  //   [5,2,8,6], 
  //   [0,5,9,1],
  //   [3,5,2,2]
  // ]
  
  // const findGreatestSumOfPairInMatrix = (matrix) => {
    
  //   let greatestPair = -Infinity;
    
  //   for (let i = 0; i < matrix.length; i++) {
      
  //     for (let j = 0; j < matrix[i].length-1; j++) {
        
  //       let current = matrix[i][j];
  //       let next = matrix[i][j+1];
  //       if (current + next > greatestPair) {
  //         greatestPair = current + next;
  //       }
  //     }
      
  //   }
  //   return greatestPair;
  // }
  
  // console.log(findGreatestSumOfPairInMatrix(matrix))
  
  
  // function findGreatestSumOfTwoConsecutiveNums (matrix) {
  //   let max = -Infinity;
  //   for(let i=0; i<matrix.length; i++) {
  //     let row = matrix[i];
  //     for(let j=0; j<row.length-1; j++) {
  //       let pairSum = row[j]+row[j+1]
  //       if( pairSum > max) {
  //         max = pairSum
  //       }
  //     }
  //   }
  //   return max
  // }
  
  // console.log(findGreatestSumOfTwoConsecutiveNums(matrix))
  
  // let max= -Infinity;
  
  // for(let i=0; i<matrix.length; i++){
  //     let row = matrix[i];
  //     for(let j=0; j<row.length-1; j++){
  //           let sum = row[j] + row[j+1];
  //           if(sum > max){
  //             max = sum;
  //           }
  //     }
  //     return max;
  // }
  
  
  // 4. Additionally, check the vertical pairs and find the max of horizontal and vertical pairs

  function findMax(matrix){
  let max = -Infinity
  let rowMax = -Infinity
  let colMax = -Infinity
  for(let row = 0; row < matrix.length; row++){
   for(let col = 0; col < matrix[row].length - 1; col++){
    if(matrix[row][col] + matrix[row ][col + 1] > max){
      colMax = matrix[row][col] + matrix[row][col + 1]
      rowMax = matrix[row][col] + matrix[row + 1][col]
    }
     max = rowMax > colMax ? rowMax : colMax
  } 
  }
   console.log(max)  
  }
  
  findMax(matrix)