const e = require("express")

var encryptThis = function(text) {
return text.split(' ').map(el => {
   if(el.length === 1) return el.charCodeAt(0);
   if(el.length === 2) return el[0].charCodeAt(0) + el[1];
   if(el.length === 3) return el[0].charCodeAt(0) + el.slice(-1) + el[1];
   if(el.length > 3) return el[0].charCodeAt(0) + el.slice(-1) + el.slice(2,-1) + el[1]
}).join(' ')
    
    }

    console.log(encryptThis('a test just to see'))
    console.log(encryptThis('at'))