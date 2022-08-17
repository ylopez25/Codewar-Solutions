function workOnStrings(a, b) {
    let s1 = {}
    let s2 = {} 
  
    a = a.split('')
    b = b.split('')
  
    //turning a to a hash map with keys as elements and value as occurence
    for(let i = 0; i < a.length; i++) {
      if(a[i].toLowerCase() in s1) {
      s1[a[i].toLowerCase()] += 1
      } else {
     s1[a[i].toLowerCase()] = 1   
        console.log(s1)
      }
    }
  
    //same for b but checking if the elements in b are in a
    //if it is, and its odd set it to uppercase
    for(let i = 0; i < b.length; i++) {
      if(b[i].toLowerCase() in s2)
      s2[b[i].toLowerCase()] += 1
      else s2[b[i].toLowerCase()] = 1
  
      if(b[i].toLowerCase() in s1) {
  //b[i] is the common el in a
  //if the value of the el is odd turn it to uppercase
  //if el in b is uppercase, turn it to lowercase
    
        if(s1[b[i].toLowerCase()] % 2 === 1) {
            console.log(b[i])
          if(b[i] === b[i].toUpperCase())
          b[i] = b[i].toLowerCase()
          else b[i] = b[i].toUpperCase()
        }
      }
    }
  
    //iterate through a and check 
    for(let i = 0; i < a.length; i++) {
      if(a[i].toLowerCase() in s2) {
        if(s2[a[i].toLowerCase()] % 2 == 1) {
          if(a[i] == a[i].toUpperCase())
          a[i] = a[i].toLowerCase()
          else a[i] = a[i].toUpperCase()
        }
      }
    }
    return [...a, ...b].join('')
  }
  
  console.log(workOnStrings("abbc","cde"))
  