function find_averages_of_subarrays(K, arr) {
    //arr to store averages
    const result = [];
    //sum
    let windowSum = 0.0,
    //index
      windowStart = 0;
     
      //start looping at index 0
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

        //sum each el
      windowSum += arr[windowEnd]; 
      //if index is greater than 5 el which is equal to index 4, sum/k and push to arr
      //
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (windowEnd >= K - 1) {
        result.push(windowSum / K); // calculate the average
        console.log(windowStart += 1)
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
  
    return result;
  }
  
  
  const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
  console.log(`Averages of subarrays of size K: ${result}`);
  