/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const N = 9;
    const rows = Array.from({length:  N}, () => new Set())
    const cols = Array.from({length:  N}, () => new Set())
    const boxes = Array.from({length: N}, () => new Set())

    for(let r = 0; r < N; r++){
        for(let c = 0; c < N; c++){
            let val = board[r][c];

            if(val == "."){
                 continue
            }
            if(rows[r].has(val)){
                return false
            }
            rows[r].add(val)
            if(cols[c].has(val)){
            return false
            }
            cols[c].add(val)

            let idx = Math.floor(r/3) * 3 + Math.floor(c/3);
            if(boxes[idx].has(val)){
                return false;
            }
            boxes[idx].add(val);
            }
        }
        return true
    }