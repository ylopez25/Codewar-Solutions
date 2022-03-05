function insideOut(x){
    return x.split(' ').map(v=>{
        if (v.length<4) return v
        let left = v.slice(0,v.length/2).split``.reverse().join``
        let right = v.slice(v.length/2).split``.reverse().join``
        let center = ''
        if (v.length%2!==0){
          right=v.slice(v.length/2+1).split``.reverse().join``
          center=v.slice(v.length/2,v.length/2+1)
        }
        return left+center+right
      }).join(' ')
}

console.log(insideOut('man i need a taxi up to ubud'))//  'man i ende a atix up to budu')
console.log(insideOut('what time are we climbing up the volcano')) //, 'hwta item are we milcgnib up the lovcona'); 
console.log(insideOut('take me to semynak')) //, 'atek me to mesykan'

/**
 * Pseudo
 * 
 */