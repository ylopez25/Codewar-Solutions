FIX this!!

function duplicates(arr) {
    //TODO: return the array of duplicates from arr
    let obj = {};
    let dupes =[];
   for(const el of arr){
if (obj[el] = el && obj[el] === 'number' ) {
    obj[el] += 1;
    console.log(obj)
}

}
    console.log(obj)

    for(let key in obj) {
        if(obj[key] > 1) {
            dupes.push(Number(key));
            console.log(typeof dupes)
        }
    }
    return dupes
}
  console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']))