/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let ans = [];

    for (let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i]);
        let col = matrix[i].indexOf(min);
        let isMax = true;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][col] > min) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            ans.push(min);
        }
    }
    return ans;
};



//--------BRUTE FORCE-------------
//     let ans = []
//     let rowMins = []
//     let colMaxs = []

//     for(let i = 0; i < matrix.length; i++){
//         let min = Infinity
//         for(let j = 0; j < matrix[i].length; j++){
//             if(matrix[i][j] < min) min = matrix[i][j]
//         }
//         rowMins.push(min)
//     }
//     for(let i = 0; i < matrix[0].length; i++){
//         let max = -Infinity
//         for(let j = 0 ; j <  matrix.length; j++){
//             if(matrix[j][i] > max) max = matrix[j][i]
//         }
//         colMaxs.push(max)
//     }
//     rowMins.map(num => {
//         if(colMaxs.includes(num))ans.push(num)
//     })
//     return ans
// };