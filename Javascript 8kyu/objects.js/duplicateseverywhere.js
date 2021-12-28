const removeDuplicateIds = (obj) => {
    for(let key in obj) {
console.log(obj[key])
};
}
console.log(removeDuplicateIds({ "1": ["C"], "2": ["A", "B", "D"]}));
// console.log(result1, { "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] });
// console.log(result2, { "1": [], "2": [], "3": ["A"] });