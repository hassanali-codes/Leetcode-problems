/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!t.length) return "";

    // Step 1: t ke characters count karo
    const need = {};
    for (const c of t) {
        need[c] = (need[c] || 0) + 1;
    }

    const window = {};
    let have = 0;
    const total = Object.keys(need).length; // kitne unique chars chahiye

    let left = 0;
    let bestLen = Infinity;
    let bestLeft = 0;

    // Step 2: Right pointer aage barhao
    for (let right = 0; right < s.length; right++) {
        
        // Naya character window mein daalo
        const c = s[right];
        window[c] = (window[c] || 0) + 1;

        // Agar ye character t mein tha aur count puri ho gayi
        if (need[c] && window[c] === need[c]) {
            have++;
        }

        // Step 3: Jab sare characters mil jayein, window choto karo
        while (have === total) {
            
            // Best window update karo
            if (right - left + 1 < bestLen) {
                bestLen = right - left + 1;
                bestLeft = left;
            }

            // Left character window se nikalo
            const lc = s[left];
            window[lc]--;
            if (need[lc] && window[lc] < need[lc]) {
                have--;
            }
            left++;
        }
    }

    return bestLen === Infinity ? "" : s.substr(bestLeft, bestLen);
}
