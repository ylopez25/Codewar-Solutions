function transpose(matrix) {
   // let newArr = [];
for(let i =0; i < matrix.length; i++) {
    console.log(matrix[i][0 + 1])
    for(let j = 0 ; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}
}

//console.log(transpose([[1]])) //, [[1]]); 
console.log(transpose([[1,2,3],[4,5,6]])); // [[1,4],[2,5],[3,6]]);