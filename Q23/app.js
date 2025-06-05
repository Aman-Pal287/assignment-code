//! 23. leetCode(2206). Divide Array Into Equal Pairs
let nums = [3, 2, 3, 2, 2, 2]

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//^method 2:
var divideArray = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    for (let [key, val] of map) {
        if (val % 2 != 0) {
            return false
        }
    }
    return true
};





//^method 2:
// var divideArray = function (nums) {
//      let freq = {}
//     for(let num of nums){
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     for(let key in freq){
//         if(freq[key]%2 != 0){
//             return false
//         }
//     }
//     return true
// };