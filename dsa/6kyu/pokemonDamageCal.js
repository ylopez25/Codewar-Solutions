var effects = {
    fire : {
      fire : 0.5,
      grass : 2,
      water : 0.5,
      electric : 1
    },
    grass : {
      fire : 0.5,
      grass : 0.5,
      water : 2,
      electric : 1
    },
    water : {
      fire : 2,
      grass : 0.5,
      water : 0.5,
      electric : 0.5
    },
    electric : {
      fire : 1,
      grass : 1,
      water : 2,
      electric : 0.5
    }
  };
  
  function calculateDamage(yourType, opponentType, attack, defense){
    return Math.ceil(50 * (attack/defense) * effects[yourType][opponentType]);
  }



//OR

//   function calculateDamage(yourType, opponentType, attack, defense) {
//     var strength = { fire: 'grass', water: 'fire', grass: 'water', electric: 'water' };
//     var effectiveness = 1;
//     if (yourType == opponentType || yourType == strength[opponentType]) {
//       effectiveness = 0.5;
//     } else if (opponentType == strength[yourType]) {
//       effectiveness = 2;
//     }
//     return Math.ceil(50 * effectiveness * attack / defense);
//   }
console.log(calculateDamage("fire", "water", 100, 100)); //, 25);
console.log(calculateDamage("grass", "water", 100, 100)); //, 100);
console.log(calculateDamage("electric", "fire", 100, 100)); //, 50);
console.log(calculateDamage("grass", "electric", 57, 19)); //, 150);
console.log(calculateDamage("grass", "water", 40, 40)); //, 100);
console.log(calculateDamage("grass", "fire", 35, 5)); //, 175);
console.log(calculateDamage("fire", "electric", 10, 2)); //, 250);
