/**
 * Classes are the syntactic sugars for constructor functions
 *  Provide new way of declaring constructor functions
 * Methods can be added inside class
 * Classes are not hoisted : can not be used before it's declared
 * Syntax must follow 'use strict' JS
 */

// ES6 version classes
class Student{
    constructor(name,rollNumber,grade,section){
      this.name = name;
      this.rollNumber = rollNumber;
      this.grade = grade;
      this.section = section;
    }
  
    // Methods can be directly added inside the class
    getDetails(){
      return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}';
    }
  }
  
  let student2 = new Student("Garry", 673, "7th", "C");
  student2.getDetails();
  // Returns Name: Garry, Roll no:673, Grade: 7th, Section:C

  //VS ES5
  function Student(name,rollNumber,grade,section){
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
  }
  
  // Way to add methods to a constructor function
  Student.prototype.getDetails = function(){
    return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}';
  }
  
  
  let student1 = new Student("Vivek", 354, "6th", "A");
  student1.getDetails();
  // Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A