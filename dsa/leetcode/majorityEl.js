var majorityElement = function(nums) {
    let hash={};
    
    for(let i in nums) {
        if(hash[nums[i]]) {
            hash[nums[i]]++
        }else {
            hash[nums[i]] = 1
        }
    }
return Object.keys(hash).reduce((a,b) => hash[a] > hash[b] ? a : b)

};

console.log(majorityElement([3,2,3]))