
function bubblesortOnce(arr) {
    let newArr = arr.slice();
    for (let i = 0; i < newArr.length - 1; i++) {
      if (newArr[i] > newArr[i + 1]) {
        [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
      }
    }
    return newArr;
  }

  //sort 
  console.log((bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])) //, [7, 5, 3, 1, 2, 4, 6, 8, 9]))