function replaceAll(input, find, replace) {
    if (!input && !find) return replace;
    if(!find) return replace + input.split("").join(replace) + replace;
  let newStr = "";
  for(let i =0; i < input.length; i++) {
    if(input.slice(i, i+find.length) == find) {
        console.log(input.slice(i, i + find.length))
      newStr += replace;
      i += find.length -1 
    }else {
      newStr += input[i];
    }
  }
    return newStr;
  }

console.log(replaceAll("string-string", "ing", "!")) //, "str!-str!", "Matches found");
console.log(replaceAll("", "", "-")) //, "-", "Empty input, empty find");
console.log(replaceAll("1", "", "-")) //, "-1-", "Single-character input, empty find");
console.log(replaceAll("123", "", "-")) //, "-1-2-3-", "Empty string as find");