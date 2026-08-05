/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = "";

    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) {

        if(i < word1.length){
            merged += word1[i];
            i++;
        }
        if(j < word2.length){
            merged += word2[j];
            j++;
        }
    }
    return merged;
}

//----------BRUTE FORCE----------
//     let merged = ""

//     for(let i = 0; i < Math.min(word1.length, word2.length); i++){
//         merged += word1[i]
//         merged += word2[i]
//     }
//     let minLength = Math.min(word1.length, word2.length);

//     for(let i = minLength; i < word1.length; i++){
//         merged += word1[i]
//     }

//     for(let i = minLength; i < word2.length; i++){
//         merged += word2[i]
//     }
//     return merged
// }