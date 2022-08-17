function transpose(matrix) {
    return matrix[0].map(function(_, i) {
      return matrix.map(function(_, j) {
        return matrix[j][i];
      });
    });
  }
  