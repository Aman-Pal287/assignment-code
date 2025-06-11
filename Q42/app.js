//! Q42. 2124. Check if All A's Appears Before All B's 

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    let foundB = false;
    for (let char of s) {
        if (char === 'b') {
            foundB = true;
        } else if (foundB && char === 'a') {
            return false;
        }
    }
    return true;
};