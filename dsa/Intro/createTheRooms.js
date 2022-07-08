//3 objectss
//3 properties inside obj

const rooms = {
    bedroom: {
      name: 'Bedroom',
      description: 'For... sleeping',
      completed: true,
    },
    bathroom: {
      name: 'Bathroom',
      description: 'This will get you clean',
      completed: false,
    },
    kitchen: {
      name: 'Kitchen',
      description: 'Hungry? Why wait?',
      completed: true,
    },
  }

  //or 
//   class Room  {
//     constructor() {
//       this.name = '';
//       this.description = '';
//       this.completed= '';
//     }
//   }
//   var rooms = {
//     bedroom : new Room(),
//     kitchen : new Room(),
//     bathroom : new Room(),
//   }

//best practices
//const rooms = Object.assign({}, Array.from({length:3},_ => Object.assign({}, [{n:'room'}, {d:'square'}, {c:true}])))

//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
//Array.from() method takes a word and splits it into an array or takes in an array and then converts it into a array with function rules applied
