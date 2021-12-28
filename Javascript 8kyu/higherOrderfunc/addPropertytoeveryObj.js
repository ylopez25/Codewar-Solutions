/**
 * Your task is to add a new property usersAnswer to 
 * every object in the array questions. 
 * The value of usersAnswer should be set to null. 
 * The solution should work for array of any length.
 */

//solution 1
// questions.forEach(function(q) {
//     q.usersAnswer = null
//   })


  //solution 2
  questions.forEach( (obj) => obj.usersAnswer = null);
