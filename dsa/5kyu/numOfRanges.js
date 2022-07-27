// Your task is to take arrays of numbers and compress them into ranges.

// The numbers in the array are mostly consecutive. If you convert them as ranges, it will save a lot of space. You should write a function that will convert an array of numbers into a string. A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

// For example,
// The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
// The number 6 would just be "6"
// The numbers 3,4,5,6,9 would be "3_6,9"

// Using the above system, you should write two functions:
// toRange - convert an array of numbers to a range string
// toArray - convert a range string back to an array




function toRange(arr) {
    arr=Array.from(new Set(arr)).sort((a,b)=>a-b)
    for(var i=0,r=[];i<arr.length;){
      var s=i
      while(i<arr.length&&arr[i]+1==arr[i+1]) i++
      r.push(i==s?arr[i++]:arr[s]+"_"+arr[i++])
    }
    return r.join(",")
  }
  function toArray(str) {
    for(var arr=str.split(","),i=0,r=[];str!=""&&i<arr.length;i++){
      var [a,b]=(arr[i]+"_"+arr[i]).split("_")
      for(var j=+a;j<=+b;j++) r.push(j)
    }
    return r
  }