//! 39. Remove the vowels from a String 
let str = "madharchod"
// Output: ""

let ans = ''
let vowel = "aeiou"
for(let i=0 ; i<str.length;i++){
    let ch = str.charAt(i)
    if(vowel.includes(ch)){
        ans += ""
    }else{
        ans += ch
    }
}

console.log(ans);
