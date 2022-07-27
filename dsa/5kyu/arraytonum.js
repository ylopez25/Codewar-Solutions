// Should return a string representing the ranges
function toRange(arr) {
    if(arr.length < 1) return arr.toString();
    let newArr = arr.sort((a,b) => a > b);
    let min =newArr[0];
    let consec = [];
    let nonconsec =[];
    for(let i =0; i < newArr.length; i++) {
      if(newArr[i] === min + i){
        consec.push(newArr[i])
        console.log(consec)
      }else {
        nonconsec.push(newArr[i])
        console.log(nonconsec)
      }
    }
    const max = consec[consec.length - 1]
    console.log(max)
    console.log(min.toString() + "_" + max.toString() + "," )
    return min.toString() + "_" + max.toString() + "," + nonconsec.toString()
  }
  
  // Should return an array
  function toArray(str) {
  }

  console.log(toRange([3,4,5,6,9,11,13]))