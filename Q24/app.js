//! 24. leetCode(2341). Maximum Number of Pairs in Array  

//^brut force method
// let nums = [1, 3, 2, 1, 3, 2, 2]
// let pairs = 0
// let leftover = 0

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (i != j && nums[i] >= 0 && nums[j] >= 0 && nums[i] == nums[j]) {
//             nums[i] = -1
//             nums[j] = -1
//             pairs++
//             break
//         }

//     }
// }
// for(let i of nums){
//     if(i>=0 ){
//         leftover++
//     }
// }


//^ optimized solution

let nums = [1,3,2,1,3,2,2]

function numberOfPairs(nums){
    let map = new Map()

    for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
    }

    let pair = 0 
    let left = 0

    for(let count of map.values()){
        pair += Math.floor(count/2)
        left += count % 2;
    }

    return [pair , left]
}
