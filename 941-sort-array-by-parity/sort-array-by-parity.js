/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let left = 0
    let  right = nums.length - 1

    while(left < right){
        if(nums[left] % 2 === 0){
            left++
        }
        else if(nums[right] % 2 !== 0){
            right--
        }
        else if(nums[left] % 2 !== 0 && nums[right] % 2 === 0){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
        }
    }
    return nums
}

// -------------BRUTE FORCE-------------
//     let even = []
//     let odd = []

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] % 2 === 0){
//             even.push(nums[i])
//         }
//         else{
//             odd.push(nums[i])
//         }
//     }
//     return [...even, ...odd]
// }