var intersect = function(nums1, nums2) {
 
    let hash = {};
    let intersection =[];
    
    for(let i in nums1){
        if(hash[nums1[i]]) {
            hash[nums1[i]]++
        }else {
            hash[nums1[i]] = 1
        }
    }

    for(let i in nums2) {
        if(hash[nums2[i]]) {
            intersection.push(nums2[i])
        }
    }
    return intersection
   };

   console.log(intersect([1,2,2,1],[2,2]))
   console.log(intersect([2,2],[2,2]))