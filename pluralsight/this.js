// function Product(id, name, cost, price) {
//     this.productId = id;
//     this.name = name;
//     this.listPrice =price;
//     this.standardCost = cost;
//     this.grossProfit = function () {
//         return this.listPrice - this.standardCost
//     }
// }

// function constuct() {
//     let prod= new Product(2,'22', 4,5)
//     console.log(prod.grossProfit())
// }

function testingArrayMethods(arr) {
    let max = arr.find(el=> el>2)
    let copy = [...arr];
    console.log(copy) // exact replica => [1,2,3]
    let matrix = arr; 
    console.log(matrix) // creates arr of arr => [[1,2,3]]
    let newArr = arr.fill(0);// =>  fill method sets arr and not a copy [0,0,0]
    console.log(newArr)
    console.log(arr) //when calling arr after filling it it is still [0,0,0]
    let exArr = [3,4,5]
    let update = Array.of(...exArr)
    console.log(update) // spread makes a copy => 
    let update2= Array.of(exArr)
    console.log(update2) // arr of arr => [[3,4,5]]
    let filter = exArr.filter(el => el !== 5);
    console.log(filter) // returns arr that meets condition
return max
}
console.log(testingArrayMethods([1,2,3]))