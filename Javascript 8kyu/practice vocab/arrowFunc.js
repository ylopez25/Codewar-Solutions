var obj1 = {
    valueOfThis: function(){
      return this;
    }
  }
  var obj2 = {
    valueOfThis: ()=>{
      return this;
    }
  }
  
  console.log(obj1.valueOfThis()); // Will return the object obj1
  console.log(obj2.valueOfThis()); // Will return window/global object

  /**
   * obj1 is traditional function 
   * obj2 is arrow function
   * Main difference is handling the this keyword
   * this keyword refers to object that is calling the function
   * In arrow function there is no binding of the this keyword
   * I inherits the value from the parent scope which is the window obj in his case
   */