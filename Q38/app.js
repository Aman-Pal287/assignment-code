//! 38. Leetcode 1920 - Build Array from Permutation

//^ mera dimag
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var buildArray = function(nums) {
//     let ans = new Array()
//     for(let i=0;i<nums.length;i++){
//         ans[i] =  nums[nums[i]]
//     }
//     return ans
// };


//^ optimized
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    const n = nums.length;

    // Step 1: Encode both old and new value in each element
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] + n * (nums[nums[i]] % n);
    }

    // Step 2: Extract the new value
    for (let i = 0; i < n; i++) {
        nums[i] = Math.floor(nums[i] / n);
    }

    return nums;
};