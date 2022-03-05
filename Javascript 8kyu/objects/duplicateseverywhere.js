
    //new Obj
    //get keys using Object.keys(obj)
    //use built in sort method from greatest to smallest
    //variable for new Set() which gets rid of duplicates in array and turns it into obj
    //key into key of sorts keys obj
    //assign value of key to empty arr
    //key into og value 
    //check if the the value is not used already 
    //if not assign new obj value equal el
    //also add it to newSet to keep track of el already added 

function removeDuplicatesId (obj) {
let newObj = {};
let keys = Object.keys(obj).sort((a,b) => b-a);
let newS = new Set();

for(let k of keys) {
    console.log(newObj[k])
    newObj[k] = [];
    for(let v of obj[k]) {
        console.log(k)
        if(!newS.has(v)) {
            newObj[k].push(v);
            newS.add(v)
        }
    } 
}
return newObj
}

console.log(removeDuplicatesId({
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["A", "B", "D"],
  }))



// console.log(removeDuplicateIds({ "1": ["C"], "2": ["A", "B", "D"]}));
// console.log(removeDuplicateIds({ "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] }));
// console.log(removeDuplicateIds({ "1": [], "2": [], "3": ["A"] }));

