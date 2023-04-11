//(()) === true
//(() === false
// ((abc)) 
//[(] 
function balancedParenthesis(str) {
    // str: the string we are checking for parenthesis
    // returns true if the parenthesis are balanced
    let openersAndClosers = {
      "(": ")",
      "[": "]",
      "{": "}",
    }
    let openers = [];
    //[  ( ] 
    for (let i = 0; i < str.length; i++) {
      if (Object.keys(openersAndClosers).includes(str[i])) {
        openers.push(str[i])
      }
      if (Object.values(openersAndClosers).includes(str[i])) {
        let opener = openers.pop();
        if (opener === undefined) return false;
        if (openersAndClosers[opener] !== str[i]) return false;
      }
    }
    return (openers.length === 0);
  }
  //peak?
  console.log(balancedParenthesis('(())') === true);
  console.log(balancedParenthesis('(()') === false)
  console.log(balancedParenthesis(')') === false)
  console.log(balancedParenthesis('()()()()()()()()()()()') === true)
  console.log(balancedParenthesis('((((((((((()))))))))))') === true)
  console.log(balancedParenthesis('(((((((((((') === false)
  console.log(balancedParenthesis('([])') === true);
  console.log(balancedParenthesis('([)]') === false);