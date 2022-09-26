function encrypt(text, rule) {
    if(text.length === 0 ) return text;
    let newS = []
text.split('').map(el=> {
        //console.log(String.fromCharCode(el.charCodeAt(0) + rule))
     newS.push(String.fromCharCode(el.charCodeAt(0) + rule));
     console.log(newS)
    })
 return newS.join('')
    
  };

  console.log(encrypt('', 1)) //''
  console.log(encrypt('a',1))
  console.log(encrypt("ab",1)) //'b'