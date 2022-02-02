function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  
  var person1 = new Person("Vivek", 76, "male");
  console.log(person1);
  
  var person2 = new Person("Courtney", 34, "female");
  console.log(person2);

  var person3 = new Person('Yesi', 26, 'female');
  console.log(person3)
     /**
   * Use Pascal notation - every word should start with Pascal Notation
   * Use constructor function when you want to create multiple objects with similar properties
   * When creating a new object, use the new keyword
   */