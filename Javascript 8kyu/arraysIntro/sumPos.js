function countPositivesSumNegatives(input) {
return input && input.length ? [
input.filter(x => x > 0).length,
input.filter(x => x < 0).reduce((a,b) => a + b, 0)

]
:
[]
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) 

//I have an array of integers
// I want to return the total of positive numbers for index 0
//I want indx 1 to be the sum of negative numbers 
// iin order to create an array you just add the values you want inside of brackets. You don't need to have an empty array
// filter method returns a new array of condition inside parenthesis. and reduce will give you the sum of two numbers wih the starter number after.