// ...
//split by space
//loop through arr of words and take only first index
//then join

//best practice
//const makeString = s => s.split(' ').map(x => x[0]).join('')

function makeString(s){
let news = s.split(' ');
console.log(news)
let newArr = [];
    for(let i = 0; i < news.length; i++) {
        newArr.push(news[i].split('')[0]);
    }
    return newArr.join('')
  }

  console.log(makeString('yesenia lopez rodriguez'))