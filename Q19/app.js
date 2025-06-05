// 19. You are given two arrays of **equal length**:
// * An **integer array** `A[]`
// * A **character array** `B[]`, where each character is one of `'a'`, `'b'`, or `'c'`
// Each element in array `B` is associated with the corresponding element in array `A`, i.e., `B[i]` is linked to `A[i]` for all valid indices `i`.

// ---

// ### 🎯 **Task:**
// Find the **minimum** value of the expression:
// ```
// min(sum of values linked with 'a' + sum of values linked with 'b' , sum of values linked with 'c')
// ```

// That is:

// ```
// min(a_sum + b_sum, c_sum)
// ```

// Where:

// * `a_sum` = sum of all A[i] where B[i] == 'a'
// * `b_sum` = sum of all A[i] where B[i] == 'b'
// * `c_sum` = sum of all A[i] where B[i] == 'c'

// ---

// ### 🧾 Examples:

// **Example 1:**

// ```
// Input:
// A[] = {3, 6, 4, 5, 6}
// B[] = {'a', 'c', 'b', 'b', 'a'}

// Output:
// 6

// Explanation:
// 'a' → 3 + 6 = 9
// 'b' → 4 + 5 = 9
// 'c' → 6
// → min(9 + 9, 6) = min(18, 6) = 6
// ```

// ---

// **Example 2:**

// ```
// Input:
// A[] = {4, 2, 6, 2, 3}
// B[] = {'b', 'a', 'c', 'a', 'b'}

// Output:
// 5

// Explanation:
// 'a' → 2 + 2 = 4
// 'b' → 4 + 3 = 7
// 'c' → 6
// → min(4 + 7, 6) = min(11, 6) = 6
// Oops! Looks wrong. Let's double check.

// Actually:
// → a_sum = 2 + 2 = 4
// → b_sum = 4 + 3 = 7
// → c_sum = 6
// → a + b = 4 + 4 = **8** (mistake before)

// Still:
// → min(4 + 7 = 11, 6) = **6**

// ```

// Input:
// A\[] = {4, 2, 6, 1, 3}
// B\[] = {'b', 'a', 'c', 'a', 'b'}

// 'a' → 2 + 1 = 3
// 'b' → 4 + 3 = 7
// 'c' → 6
// → min(3 + 7, 6) = min(10, 6) = 6

let A = [4, 2, 6, 1, 3]
let B = ['b', 'a', 'c', 'a', 'b']

let a_sum = 0, b_sum = 0, c_sum = 0
for(let i=0;i<A.length;i++){
    if(B[i] == 'a') a_sum += A[i]
    else if(B[i] == "b") b_sum += A[i]
    else c_sum += A[i]
}
console.log(Math.min(a_sum+b_sum,c_sum))