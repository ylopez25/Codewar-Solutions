var halvesAreAlike = function(s) {
    const lowercase = s.toLowerCase();
    let vowels = 'aeiou';
    let a = lowercase.slice(0,lowercase.length / 2);
    let aCount = 0;
    let b = lowercase.slice(a.length);
    let bCount = 0;
    for(const letter of a) {
        console.log(letter)
        if(vowels.includes(letter)) {
            aCount++
        } 
    }
    for(const letter of b) {
        console.log(letter)
        if(vowels.includes(letter)) {
            bCount++
        } 
    }
  return aCount === bCount
};
console.log(halvesAreAlike('textbook'))