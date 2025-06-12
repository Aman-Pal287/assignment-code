//! 49. 2000. Reverse Prefix of Word
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let ans = ''
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == ch) {
            for (let j = i; j >= 0; j++) {
                ans += word.charAt(j)
            }
            ans += word.substring(i + 1, word.length)
            break
        }
    }
    if (ans.length > 0) {
        return ans
    } else {
        return word
    }

};