//! 44. Greatest English Letter in Upper and Lower Case

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let set = new Set(s)
    for (let i = 90; i >= 65; i--) {
        let upper = String.formCharCode(i)
        let lower = String.formCharCode(i + 32)

        if(set.has(lower) && set.has(upper)){
            return upper
        }
    }
    return ''
};