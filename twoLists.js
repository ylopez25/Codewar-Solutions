function createDict(keys, values){
    let obj={};
    for (let i=0;i<keys.length;i++){
    obj[keys[i]]=values[i]!=undefined?values[i]:null;
    }
    return obj
}

console.log(createDict(['a', 'b', 'c'], [1, 2, 3])) //, {'a': 1, 'b': 2, 'c': 3})
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4])) //, {'a': 1, 'b': 2, 'c': 3})
console.log(createDict(['a', 'b', 'c','d'], [1, 2, 3])) // {'a': 1, 'b': 2, 'c': 3, 'd':null})


//   let obj = {}
//   for(let i = 0; i < keys.length; i++){
//     if(i < values.length)
//     obj[keys[i]] = values[i]
//     else obj[keys[i]] = null
//     }
//     return obj;