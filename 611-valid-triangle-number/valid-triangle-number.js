/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
 
    nums.sort((a, b) => a - b)
    let count = 0
    for(let i = nums.length -1; i >= 2; i--){
        let left = 0;
        let right = i - 1
        while(left < right){
            if(nums[left] + nums[right] > nums[i]){
                count += right - left
                right--
            }
            else{
                left++
            }
  
        }
 
    }
    return count
}


    // let count = 0
    
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         for(let k = j + 1; k < nums.length; k++){
    //             if(nums[i] + nums[j] > nums[k]){
    //                 count++
    //             }
    //         }
    //     }
    // }
    // return count