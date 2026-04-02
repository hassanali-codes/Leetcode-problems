/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if(nums.length == 0){
        return 0;
    }
    let numSet = new Set();
    for(let i = 0; i < nums.length; i++){
        numSet.add(nums[i])
    }
    let longestSub = 1;
    for(let num of numSet){
        if(numSet.has(num-1)){
            continue;
        }
        else{
            let currentNum = num;
            let currentSub = 1;
            while(numSet.has(currentNum+1)){
                currentNum++
                currentSub++
            }
            longestSub = Math.max(longestSub, currentSub)
        }
    }
    return longestSub;
}
