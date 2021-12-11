function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum === 0) return startNum;
  return rangeOfNumbers(startNum, endNum -1) 
    };

    console.log(rangeOfNumbers(2,10))