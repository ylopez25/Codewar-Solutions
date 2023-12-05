function diagonalDifference(arr) {
let sum =0;
let j =0;
for(let i =0; i < arr.length; i++) {
    sum+= arr[i][j];
    j=j+1;
}

let secSum =0;
let w = arr.length-1;
for(let i=0; i < arr.length; i++) {
    secSum+= arr[i][w];
    w=w--;
    console.log(secSum, 'sec')
}
}