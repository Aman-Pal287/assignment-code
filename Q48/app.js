//! 48. 2042. Check if Numbers Are Ascending in a Sentence

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    let arr = s.split(' ');
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(Number(arr[i]))) {
            ans.push(Number(arr[i]));
        }
    }

    for (let i = 1; i < ans.length; i++) {
        if (ans[i] <= ans[i - 1]) {
            return false;
        }
    }

    return true;
};