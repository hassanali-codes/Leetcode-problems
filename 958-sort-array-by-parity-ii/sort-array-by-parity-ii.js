/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = 0
    let odd = 1

    while(even < nums.length && odd < odd < nums.length){
        while(even < nums.length && nums[even] % 2 === 0){
            even += 2
        }
        while(odd < nums.length && nums[odd] % 2 !== 0){
            odd += 2
        }
        if(even < nums.length && odd < nums.length){
            [nums[even], nums[odd]] = [nums[odd], nums[even]]
        }
    }
    return nums
};




// ------------Brute Force-----------
// var sortArrayByParityII = function(nums) {
    
//     for (let i = 0; i < nums.length; i++) {
        
//          if (nums[i] % 2 !== i % 2) {
            
//              for (let j = i + 1; j < nums.length; j++) {
                
//                 if (nums[j] % 2 === i % 2) {
//                     [nums[i], nums[j]] = [nums[j], nums[i]];
//                     break;
//                 }
//             }
//         }
//     }
    
//     return nums;