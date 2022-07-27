function firstNonRepeated(s) {
    for(var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i]
    }
  }
  return null
}
    console.log(firstNonRepeated('teeter')) //e

    //best solution
//     const firstNonRepeated = s =>
//   [...s].find(val => s.indexOf(val) === s.lastIndexOf(val)) || null;