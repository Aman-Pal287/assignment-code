//!Q34:leetcode(2078) Two Furthest Houses With Different Colors


// & full optimized algorithm
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let n= colors.length;
    let maxDis = 0;
    for(let i=0;i<n;i++){
        if(colors[i] != colors[0]){
            maxDis = Math.max(maxDis , i)
        }
        if(colors[i] != colors[n-1]){
            maxDis = Math.max(maxDis,n-1-i)
        }
    }
    return maxDis


};