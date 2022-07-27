function workOnStrings(a,b){
  var d = {}
  var d2 = {}
  a = a.split('')
  b = b.split('')
  for (var i = 0; i < a.length; i++) {
    if (a[i].toLowerCase() in d) d[a[i].toLowerCase()] += 1
    else d[a[i].toLowerCase()] = 1
  }
  for (var i = 0; i < b.length; i++) {
    if (b[i].toLowerCase() in d2) d2[b[i].toLowerCase()] += 1
    else d2[b[i].toLowerCase()] = 1
    
    if (b[i].toLowerCase() in d) {
      if (d[b[i].toLowerCase()] % 2 == 1) {
        if (b[i] == b[i].toUpperCase()) b[i] = b[i].toLowerCase();
        else b[i] = b[i].toUpperCase();
      }
    }
  }
  for (var i = 0; i < a.length; i++) {
    if (a[i].toLowerCase() in d2) {
      if (d2[a[i].toLowerCase()] % 2 == 1) {
        if (a[i] == a[i].toUpperCase()) a[i] = a[i].toLowerCase();
        else a[i] = a[i].toUpperCase();
      }
    }
  }
return a.join('') + b.join('')
}
//

 //create a new arr
 //iterate through both 
 //check if the values are in both 
 // and if they are, return them in capital case


    console.log(workOnStrings("abc","cde")) //"abCCde")
    //console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe") === "abcDeFGtrzWDEFGgGFhjkWqE")
    //console.log(workOnStrings("abcdeFg", "defgG") === "abcDEfgDEFGg")
    //console.log(workOnStrings("abab", "bababa") === "ABABbababa")


     /*
        1. declare 2 array variables that point to a.split('') and b.split('')
        2.declare two empty object, to serve as a frequency counters
        3.loop through array b with a for loop
          i. if the element in array b is in array A's frequency counter
              - if frequencyCounter[elem] % 2 === 1
                  -if function call returns true
                    -change elem's case to upperCase
                    else
                      - change elem's case to lowerCase
        4. loop through array a with a for loop
            i. if the element in array a is in array B's frequency counter
              - if frequencyCounter[elem] % 2 === 1
                  -if function call returns true
                    -change elem's case to upperCase
                    else
                      - change elem's case to lowerCase
                  
      
        declare function to check if element is lower case
        
        return arrayA.join('') + arrayB.join('')
        
    */