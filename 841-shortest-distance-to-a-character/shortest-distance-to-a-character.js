/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let ans = new Array(s.length)

    let pos = -Infinity

    for(let i=0; i < s.length; i++){
        if(s[i]==c){
            pos = i
        }
        ans[i] = Math.abs(i-pos)
    }
    pos = Infinity

    for(let i=s.length-1; i>=0; i--){
        if(s[i]==c){
            pos = i
        }
        ans[i] = Math.min(ans[i], Math.abs(i-pos))
    }
    return ans
}










//------BRUTE FORCE--------
// let ans = [];

//     for (let i = 0; i < s.length; i++) {
//         let min = Infinity;

//         for (let j = 0; j < s.length; j++) {
//             if (s[j] === c) {
//                 min = Math.min(min, Math.abs(i - j));
//             }
//         }

//         ans.push(min);
//     }

//     return ans;
// };