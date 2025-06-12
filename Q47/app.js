//! 47. 2068. Check Whether Two Strings are Almost Equivalent
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
    let freq1 = new Array(26).fill(0)
    let freq2 = new Array(26).fill(0)

    for (let i = 0; i < word1.length; i++) {
        freq1[word1.charCodeAt(i) - 97]++
    }

    for (let i = 0; i < word2.length; i++) {
        freq2[word2.charCodeAt(i) - 97]++
    }

    let count = 0
    for (let i = 0; i < 26; i++) {
        if (Math.abs(freq1[i] - freq2[i]) > 3) {
            count++
            break
        }
    }
    if (count == 1) return false
    else return true

};