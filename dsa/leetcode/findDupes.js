function duplicates(arr) {

let uniqueEl = new Set(arr);
let filteredArr = arr.filter(el => {
    if(uniqueEl.has(el)) {
        uniqueEl.delete(el)
        console.log(uniqueEl)
    }else {
        console.log(el)
        return el;

    }
})

return [...new Set(filteredArr)]

}
  console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']))

  //psuedo code
  // iterate through arr
  //create a hashmap that will have the el of arr as keys and repition as values;
  //i want to return any keys that have el more than 2
  //handle strings 
  //