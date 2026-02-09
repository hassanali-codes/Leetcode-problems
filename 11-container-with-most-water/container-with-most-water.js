/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0
    let left = 0;
    let right = height.length-1
    while(left < right){
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        let currWater = width * h;
        maxWater = Math.max(maxWater, currWater);
        height[left] < height[right] ? left++ : right--;
    }
    return maxWater;
}