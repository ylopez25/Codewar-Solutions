function countdown(n){
    if (n < 1) {
      return [];
    }else {
        const newArr = countdown(n - 1) ;
      console.log(newArr.push(n ))
      return newArr.sort((a,b) => b-a)
  }
}
  console.log(countdown(20))