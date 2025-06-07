//! 40. Count Asterisks
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    let count = 0
    let betweenBars = false

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (char === "|") {
            betweenBars = !betweenBars
        } else if (char === "*" && !betweenBars) {
            count++
        }
    }
    return count
};