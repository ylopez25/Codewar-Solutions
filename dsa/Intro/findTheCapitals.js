function capital(capitals){
let newArr = [];
for(let i = 0; i < capitals.length; i++) {
    let capital = capitals[i];
    let c= Object.values(capital);
    newArr.push(`The capital of ${c[0]} is ${c[1]}`)
}
return newArr
  }

  console.log(capital([{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]))