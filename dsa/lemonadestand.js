// At a lemonade stand, each lemonade costs $5.

// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

// Return true if and only if you can provide every customer with correct change.

// let input = [5,5,5,10,20] -- true

// let input2 = [5,5,10] -- true

// let input3 = [10,10] -- false

// let input4 = [5,5,10,10,20] -- false




function lemonadeStand (customers) {
    let numOfFives = 0, numOfTens = 0, numOfTwenty = 0
      for (let bill of customers) {
          if (bill === 5) {
              numOfFives = numOfFives + 1;
          }
          if (bill === 10) {
            numOfTens = numOfTens + 1;
            if( numOfFives >= 1) {
              numOfFives = numOfFives - 1;
            } else {
              return false;
            }
          }
        if(bill === 20) {
          numOfTwenty = numOfTwenty + 1;
          if(numOfFives >= 1 && numOfTens >= 1){
            numOfFives = numOfFives - 1
            numOfTens = numOfTens -1 
          } else if (numOfFives >= 3) {
            numOfFives = numOfFives - 3;
          } else {
            return false;
          }
        }
      }
      return true;
  }
  
  //create variable of sum
  //loop through arr and add to variable 
  //
  console.log(lemonadeStand([5,5,5,10,20]) === true);
  console.log(lemonadeStand([5,5,10]) === true) ;
  console.log(lemonadeStand([10,10]) === false);
  console.log(lemonadeStand([5,5,10,10,20]) === false);
  console.log(lemonadeStand([]) === true);
  console.log(lemonadeStand([20]) === false);
  console.log(lemonadeStand([5, 5, 5, 5, 5, 5, 20, 20]) === true);
  
  