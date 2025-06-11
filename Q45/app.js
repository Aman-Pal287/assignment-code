//! 45. 2283. Check if Number Has Equal Digit Count and Digit Value
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let map = new Map()
    for(let i=0;i<num.length;i++){
        if(map.has(num[i])){
            map.set(num[i],map.get(num[i])+1)
        }else{
            map.set(num[i] , (map.get(num[i])||0)+1)
        }
    }

    for(let i=0;i<num.length;i++){
       if ((map.get(i.toString()) || 0) !== Number(num[i])) {
            return false;
        }
    }
    return true
};