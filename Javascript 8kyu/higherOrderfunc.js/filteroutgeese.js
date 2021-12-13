/** Return an array that does not include elemnts of geese */

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.includes(bird));
  };

//Basic for loop solution 
//   function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
//   var newArray = [];
//     for (var i =0;i<birds.length;i++) {
//     if (!geese.includes(birds[i])) {
//       newArray.push(birds[i]);
//     }
//     }
//   return newArray;
//   };


console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))//,["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
// console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]))//["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
// console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))//,[]);


/**
 * Yesis pseudo
 * array of str as input
 * returns array filtered by same el in geese array
 * iterate through birds array
 * check if geese el is equal to birds el 
 * if not return value 
 */

/**
 * Yesi new pseudo
 * filter the elements in the array birds that does not include elements in geese
 */