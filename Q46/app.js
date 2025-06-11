//! 46. 2243. Calculate Digit Sum of a String
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    while (s.length > k) {
        let temp = ''
        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k)

            let sum = 0
            for (let ch of group) {
                sum += Number(ch)
            }
            temp += sum.toString();
        }
        s = temp;
    }
    return s
};




