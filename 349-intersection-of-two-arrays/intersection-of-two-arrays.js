/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    let set = new Set()
    let ans = []

    for(let i = 0; i < nums1.length; i++){
        set.add(nums1[i])
    }

    for(let i = 0; i < nums2.length; i++){
        if(set.has(nums2[i])){
            ans.push(nums2[i])
            set.delete(nums2[i])
        }
    }
    return ans
}

// -----------BRUTE FORCE-----------
// let ans = []
//     for(let i = 0; i < nums1.length; i++){
//         if(ans.includes(nums1[i]))continue
//         for(let j = 0; j < nums2.length; j++){
//             if(nums1[i] === nums2[j]){
//                 ans.push(nums1[i])
//                 break
//             }
//         }
//     }
//     return ans
// }