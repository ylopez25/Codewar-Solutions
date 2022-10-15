// function max_sub_array_of_size_k(k, arr) {

//     let maxSum = 0,
//       windowSum = 0;
  
//     for (i = 0; i <= arr.length - k ; i++) {
//         console.log(arr[i])
//         console.log(i)
//         console.log(windowSum)
//       windowSum = 0;
//       for (j = i; j < i + k; j++) {
//         console.log(i)
//         windowSum += arr[j];
//       }
//       maxSum = Math.max(maxSum, windowSum);
//     }
//     return maxSum;
//   }
  
//   //create a variable to track window sum
//   //create a variable to track actual sum of window
//   //iterate through arr and length of it will be 6 - 3+1 which is 6 -4 = 2
//   //index 2 is 3 length so we want to make it that length => we could also do i <= length - k
//   //set windowsum to 0 again why?
//   //iterate 
//   //
//   console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
//   //console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
  

function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0,
      windowStart = 0;
  
    for (i = 0; i < arr.length; i++) { //
      windowSum += arr[i]; // add the next element // 0+2 = 2 1 >? add sum => 2 +1 = 3 => 5 => 7 => 9 => 6
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (i >= k - 1) { //index 3 
        maxSum = Math.max(maxSum, windowSum); 0,3 // maxsum = 5 // 7 //9
        windowSum -= arr[windowStart]; // subtract the element going out 5 - 2 = 3 // 7 - 1 = 6 // 9 - 5 = 4
        windowStart += 1; // slide the window ahead // 1 => 1 = id 3 => 1 
      }
    }
    return maxSum;
  }
  
  
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);