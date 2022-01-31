const twoSum = (numbers, target)=>{
 let left = 0;
 let right = numbers.length-1;

 while(left < right){
     const sum = numbers[left] + numbers[right]

      if(sum === target){
        return [numbers[left],numbers[right]]
       // return [++left, ++right]
      }
      if(sum < target) left++
      if(sum > target) right--
    }   
}

console.log(twoSum([1,2,4,6],3))

console.log(twoSum([1,2,3,4,5,6], 8))