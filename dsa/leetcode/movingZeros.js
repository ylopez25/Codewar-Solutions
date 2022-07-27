var moveZeroes = function(arr) {
    // var filtedList = arr.filter(function (num){return num !== 0;});
    // var zeroList = arr.filter(function (num){return num === 0;});
    // return filtedList.concat(zeroList);

//OR
let index = 0;
for(let i =0; i < arr.length; i++) {
    if(arr[i] !== 0) {
        arr[index] = arr[i];
        index++;
    }
   arr[i] = 0;
}
};

console.log(moveZeroes([0,1,0,3,12]))