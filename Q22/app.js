// 22.Given an array of even size, task is to find minimum value that can be added to an element so that array become balanced.
// An array is balanced if the sum of the left half of the array elements is equal to the sum of right half. Suppose, we have an array 1 3 1 2 4 3.
// The Sum of first three elements is 1 + 3 + 1 = 5 and sum of last three elements is 2 + 4 + 3 = 9
// So this is unbalanced, to make it balanced the minimum number we can add is 4 to any element in first half.

// Examples :

// Input : 1 2 1 2 1 3
// Output : 2
// Sum of first 3 elements is 1 + 2 + 1 = 4,
// sum of last three elements is 2 + 1 + 3 = 6
// To make the array balanced you can add 2.

// Input : 20 10
// Output : 10


// let arr = [1, 3, 1, 2, 4, 3]
// let n= arr.length
// let ans = 0
// let leftSum = 0, rightSum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (i < (n / 2)) {
//         leftSum += arr[i]
//     } else {
//         rightSum += arr[i]
//     }
// }

// if (leftSum == rightSum) {
//     console.log("balanced hai");
// } else {
//     ans = Math.max(leftSum, rightSum) - Math.min(leftSum, rightSum)
//     console.log("ans hai = ", ans);

// }



//! bhula bhatka hua question --------------------------- in dono question ko karna hai kal
// Q19. Sort First half in Ascending and Second half in descending order in an array

// 20. find sum of minimum absolute difference of the given array
//      https://prepinsta.com/java-program/to-find-sum-of-minimum-absolute-difference-of-the-given-array/
