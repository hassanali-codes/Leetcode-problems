/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {

        let left = 0;
        let right = words[i].length - 1;

        let isPalindrome = true;

        while (left < right) {
            if(words[i][left] !== words[i][right]){
                isPalindrome = false
                break
 
            }
            left++
            right--
        }

        if (isPalindrome) {
            return words[i];
        }
    }

    return "";
}


// -----------BRUTE FORCE-------------- 
//     for(let i = 0; i < words.length; i++){
//         let reverse = ""

//         for(let j = words[i].length-1; j >= 0; j--){
//             reverse += words[i][j]
//         }
//         if(reverse === words[i]){
//             return words[i]
//         }
//     }

//     return ""
// }