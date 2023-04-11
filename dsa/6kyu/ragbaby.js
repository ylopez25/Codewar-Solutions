function encode(text, key) {
    key = [...new Set(key)].join``
    let keyLo = key + [...'abcdefghijklmnopqrstuvwxyz'].filter(x => !key.includes(x)).join``
    let keyHi = keyLo.toUpperCase()
    let i = 0
    return [...text].map(c => {
      if (/[A-Z]/.test(c)) return keyHi[(keyHi.indexOf(c) + ++i) % 26]
      if (/[a-z]/.test(c)) return keyLo[(keyLo.indexOf(c) + ++i) % 26]
      i = 0
      return c
    }).join``
  }
  
  function decode(text, key) {
    key = [...new Set(key)].join``
    let keyLo = key + [...'abcdefghijklmnopqrstuvwxyz'].filter(x => !key.includes(x)).join``
    let keyHi = keyLo.toUpperCase()
    let i = 0
    return [...text].map(c => {
      if (/[A-Z]/.test(c)) return keyHi[(keyHi.indexOf(c) + 26*4 - ++i) % 26]
      if (/[a-z]/.test(c)) return keyLo[(keyLo.indexOf(c) + 26*4 - ++i) % 26]
      i = 0
      return c
    }).join``
  }

  
  console.log(encode("this is an example","cipher")) //Urew pu bq rzfsbtj. );

  //lets split the key and create a variable with the alphabet
  //use the find method to see and remove letters in the key
