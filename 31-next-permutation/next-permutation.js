/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for(let i = nums.length - 1; i > 0; i--) {
        
        if(nums[i - 1] < nums[i]) {
            let piv = nums[i - 1];

            for(let j = nums.length - 1; j > i - 1; j--) {
                if(nums[j] > piv) {
                    let temp = nums[i - 1];
                    nums[i - 1] = nums[j];
                    nums[j] = temp;
                    break;
                }
            }

            let left = i;
            let right = nums.length - 1;

            while(left < right) {
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;

                left++;
                right--;
            }

            return;
        }
    }
    nums.sort((a, b) => a - b);
};