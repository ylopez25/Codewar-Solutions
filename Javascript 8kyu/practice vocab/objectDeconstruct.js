//OBJECT DESTRUCTURING
/**
 * The object destructuring is a powerful feature that lets you extract properties from an object and bind these values to variables.

I especially like about object destructuring is the concise syntax and ability to extract multiple variables in one statement.
This allows for DRY code and easier to read and use variables,
you can extract multiple variables in one statement and assign a default value to nonexisting porperties.
*/

const hero = {
  name: "Batman",
  realName: "Bruce Wayne",
  real: "hi",
  names: "joe",
};
const { real, ...realHero } = hero;

console.log(realHero); // => { realName: 'Bruce Wayne' }

/**
 * Vocab :
 * identifier = property name,
 * expression = object name,
 * defaultValue = value of property
 *
 * Object deconstructoring can extract a property by using:
 * const {identifier, ...rest} = expression
 *
 * You can assign new variable name by :
 * const {identifier : newName} = expression
 *
 * You can assign default value to new variable by :
 * const {name= 'defaultValue'} = expression
 * */

const heroes = [{ name: "Batman" }, { name: "Joker" }];
for (const { name } of heroes) {
  //with curly brackets you get names as string, without curly brackets you get object name from array
  console.log(name); // logs 'Batman', 'Joker'
}

//Function parameter destructuring
const heroess = [{ name: "Batman" }, { name: "Joker" }];
const names = heroess.map(function ({ name }) {
  return name;
});
names; // => ['Batman', 'Joker']
