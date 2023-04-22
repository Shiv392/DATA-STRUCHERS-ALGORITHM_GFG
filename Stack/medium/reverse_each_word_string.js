// Given a String. Reverse each word in it where the words are separated by dots.
// Example 1:
// Input:
// S = "i.like.this.program.very.much"
// Output: 
// i.ekil.siht.margorp.yrev.hcum
// Explanation: 
// The words are reversed as
// follows:"i" -> "i","like"->"ekil",
// "this"->"siht","program" -> "margorp",
// "very" -> "yrev","much" -> "hcum".
var reverseWords = function(s) {
    //short approch
    // s=s.split(' ');
    // for(let i of s){
    //     i=i.split('').reverse().join('');
    // }
    // return i.join(' ')
    let stack=[],res="";
    for(let i=0;i<s.length;i++){
        if(s[i]=='.'){
            while(stack.length){
            res+=stack[stack.length-1];
            stack.pop();
            }
            res+='.'
        }
        else {
            stack.push(s[i]);
        }
    }
    while(stack.length){
        res+=stack[stack.length-1];
        stack.pop();
    }
    return res;
};