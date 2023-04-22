// Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.
// Note: The extra space is only for the array to be returned.
// Try and perform all operations within the provided array. 
// Example 1:
// Input:
// N = 4
// a[] = {0,3,1,2}
// Output: -1
// Explanation: N=4 and all elements from 0
// to (N-1 = 3) are present in the given
// array. Therefore output is -1.
class Solution {
    
    duplicates(a, n)
    {
       let map=new Map();
       for(let i of a){
           map.set(i,map.get(i)+1||1);
       }
       let res=[];
       for(let i of a){
           if(map.get(i)>1){
               res.push(i);
               map.delete(i);
           }
       }
       return res.sort((a,b)=>a-b);
    }
}