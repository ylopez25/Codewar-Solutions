let name = {
    firstname : 'Yesi',
    lastname: 'Lopez',
}

let fullname = function(hometown) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown)
}

//name.fullname()

let name2 = {
    firstname: 'joel',
    lastname:'canela'
}
//function borrowing 
//redirecting info to another function without changing the orignal 
//with more argument you will just add more commas
//the only difference between call and apply is that you impliment arguments differently
//in apply method you use square brackets vs call it is added manually
//console.log(fullname.apply(name, ['coney island']))

//bind method creates a copy of the object to a new function 
//uses the this keyword to set provided value
//
let newObj = fullname.bind(name2, 'coney island')
console.log(newObj())

