function isSameLanguage(list) {
    console.log(list[0].language)
return list.every(x => x.language === list[0].language)
}
  var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ];
  
  var list2 = [
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
  ];

  var list3 = [
    { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Python' },
    { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'Python' },
  ];
console.log(isSameLanguage(list1)) //, true);
console.log(isSameLanguage(list2)) //, false);
console.log(isSameLanguage(list3))

/**
 * Yesi's Pseudo code
 * use the "every method" to check if all elements in the array of objects are true or false
 * check if the property of language is equal to the first language in the array list 
 * grab list[0] with property language and compare it to every other element 
 * this will compare every language to the first one in the list
 */