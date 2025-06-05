// ! Q18=> Given a sorted array of distinct elements, the task is to find the summation of absolute differences of all pairs in the given array.

// Examples:

// Input : arr[] = {1, 2, 3, 4}
// Output: 10
// Sum of |2-1| + |3-1| + |4-1| +
//        |3-2| + |4-2| + |4-3| = 10


//& solution
let arr = [1, 2, 3, 4]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        sum += (arr[j] - arr[i])
    }
}
console.log(sum);
