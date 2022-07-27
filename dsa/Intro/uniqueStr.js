function solve(a,b){
 
    let uniqueCharsOfAAndB = '';
    //when it comes to uniqueness, always consider using a set 
  
    let uniqueCharsInB = new Set();
    
    for(const char of b){ //'b'
      uniqueCharsInB.add(char);
    }
  
    // iterate over all chars in a
    for(const char of a){ //'a'
      // if char is not in uniqueCharsInB
      if(!uniqueCharsInB.has(char))
        // add to a string
        uniqueCharsOfAAndB += char; ;//'aaa'
    }
    
    let uniqueCharsInA = new Set(); 
    
    for(const char of a){
      uniqueCharsInA.add(char); //{'a'}
    }
  
    // iterate over all chars in b
     for(const char of b){
      // if char is not in uniqueCharsInB
      if(!uniqueCharsInA.has(char))
        // add to a string
        uniqueCharsOfAAndB += char; //'aaabbb'
    }
  
  
    return uniqueCharsOfAAndB // 'aaabbb'
  };
  
  
  console.log(solve('aaa', 'bbb') === 'aaabbb');
  
  console.log(solve("xyab","xzca") ==="ybzc");
  
  
  
  
  
  // n =  the longest set of elements in our parameters
  // n = 10
  
  let arr = [1,2,3,4,5,6,7,8,9,10] 
  // how many steps to iterate through this array?
  
  
  
  let a = 'abc'
  let b = 'xyz';
  
  let splitA = ['a','b', 'c']
                          |
  let splitB = ['x','y', 'z']
                         |
  
  function solve(a,b){
   const splitA = a.split("") // O(n)
   const splitB = b.split("") // O(n)
   const answer = []
   
   for (let character of splitA){ //O(n) whene n is the length of splitA
     
     if(!splitB.includes(character)){ // 0(n)  n * n = 9  // 100 * 100 = 10,000
       answer.push(character)
     }
   }
   
    for (let character of splitB){
     if(!splitA.includes(character)){
       answer.push(character)
     }
   }
    return answer.join("")
  };


  //works1

function solve(a,b){
  //loop thru a
   //loop thru b
   //if char not in b, add to chars, & vice versa
 
 let chars = ''
 for(let i = 0; i < a.length; i++){
   if(!b.includes(a[i])){
     chars += a[i]
   }
 }
   
   for(let i = 0; i < b.length; i++){
   if(!a.includes(b[i])){
     chars += b[i]
   }
 }
     return chars
 
 };

 //works 2
 function solve(a,b){
  let str1 = a.split('').filter(v => !b.split('').includes(v)).join('')
  let str2 = b.split('').filter(v => !a.split('').includes(v)).join('')
  return str1 + str2
};

///works 3

function solve(a,b) {
  let setA = new Set(a);
  let setB = new Set(b);
  return [...(a+b)].filter(c => setA.has(c) ^ setB.has(c)).join("");
};