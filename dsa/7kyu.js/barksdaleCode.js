function decode(string) {
    //your code here
    return string.split('').map(el => {
      if(el === "1") return "9";
      if(el === "2") return "8";
      if(el === "3") return "7";
      if(el === "4") return "6";
      if(el === "5") return "0";
      if(el === "6") return "4";
      if(el === "7") return "3";
      if(el === "8") return "2";
      if(el === "9") return "1";
      if(el === "0") return "5";
    }).join('')
  }