var containsDuplicate = function(nums) {
    let newObj = {}
    for(const num of nums) {
        // If we have seen this num before return true
        if(newObj[num]) return true
        newObj[num] = true
    }
    return false;
    console.log(newObj)
};


// var containsDuplicate = function(nums) {
//     return new Set(nums).size !== nums.length
// };
// ex: 
// [1,2,3,1] => true