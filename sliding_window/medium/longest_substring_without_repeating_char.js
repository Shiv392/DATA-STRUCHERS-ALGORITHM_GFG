// Given a string S, find the length of the longest substring without repeating characters.
// Example 1:
// Input:
// S = "geeksforgeeks"
// Output:
// 7
// Explanation:
// Longest substring is
// "eksforg".
class Solution {
    longestUniqueSubsttr(str){
      let map=new Map(),left=0,right=0,res=0;
      while(right<str.length){
          if(!map.has(str[right])){
              map.set(str[right],1);
              res=Math.max(res,map.size);
              right++;
          }
          else{
              map.delete(str[left]);
              left++;
          }
      }
      return res;
    }
}