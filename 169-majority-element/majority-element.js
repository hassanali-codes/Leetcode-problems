/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();

     for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

 
    let maxFreq = 0;
    let result = null;

    for (let [num, freq] of map) {
        if (freq > maxFreq) {
            maxFreq = freq;
            result = num;
        }
    }

    return result;
}
