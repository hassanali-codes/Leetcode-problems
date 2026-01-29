/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    const INT_MIN = -2147483648
    const INT_MAX = 2147483647

    while(x !== 0){
        let digit = x % 10;

        x = Math.trunc(x / 10)

        rev = rev * 10 + digit;
        if(rev < INT_MIN || rev > INT_MAX){
            return 0;
        }

    }
    return rev;
};