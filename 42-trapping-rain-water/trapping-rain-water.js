/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let ans = 0;
    let l = 0, r = n - 1;
    let lmax = 0, rmax = 0;

    while(l < r){
        lmax = Math.max(lmax, height[l])
        rmax = Math.max(rmax, height[r])

        if(lmax < rmax){
            ans += lmax - height[l];
            l++
        } else{
            ans += rmax - height[r]
            r--
        }
    }
    return ans;
}