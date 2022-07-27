function getTheVowels(word) {
    let vowels = 'aeiou';
      return word.split('').reduce((count,char) => count + (char === vowels[count % vowels.length]), 0)
    }

    //disect this