function isPangram(string) {
  let alpha = {
    a: 0,
    b: 0,
    c: 0,
  };
  const s = string.replace(/[\W_]/g, "").toLowerCase();

  for (let i = 0; i < s.length; i++) {
    for (let key in alpha) {
      if (s[i] === key) {
        alpha[key] += 1;
        console.log(alpha);
      }
    }
  }

  for (let key in alpha) {
    if (alpha[key] < 1) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); //true
console.log(isPangram("This is not a pangram.")); //false
/**
 * create an obj with alphabet
 * set the letters as key
 * iterate through the str
 * if character in obj assign value to one
 * if all keys are greater than one return true else false
 */
