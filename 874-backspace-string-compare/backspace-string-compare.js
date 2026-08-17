/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let rightS = s.length -1
    let rightT = t.length -1

    let skipS = 0
    let skipT = 0
    while (true){
        while (rightS >= 0){
            if(s[rightS] === '#')skipS++
            else if(skipS >  0)skipS--
            else{
                break
            }
            rightS--
        }
         
        while (rightT >= 0){
        if(t[rightT] === '#')skipT++
        else if(skipT >  0)skipT--
        else{
            break
        }
        rightT--
        }
        if(rightS === -1 && rightT === -1)return true
        else if(rightS === -1 || rightT=== -1)return false
        else if(s[rightS] !== t[rightT])return false
        else{
            rightS--
            rightT--
        }  
    }
 
}







// ----------BRUTE FORCE------------
//     let stackS = []
//     let stackT = []

//     for(let char of s){
//         if(char === '#'){
//             stackS.pop()
//         }
//         else{
//             stackS.push(char)
//         }
//     }
//     for(let char of t){
//         if(char === '#'){
//             stackT.pop()
//         }
//         else{
//             stackT.push(char)
//         }
//     }
//     return stackS.join("") === stackT.join("")
// }
