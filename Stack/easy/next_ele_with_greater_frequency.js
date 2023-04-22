// Given an array arr[ ] of n integers, for every element, find the closest element on it's right that has a greater frequency than its own frequency.
// Frequency is the number of times the element appears in the array.
// Example 1:
// Input:
// n = 6
// arr[] = {2 1 1 3 2 1}
// Output:
// 1 -1 -1 2 1 -1 
function stack(nums){
    let map=new Map();
    for(let i of nums){
        map.set(i,map.get(i)+1||1);
    }
    let res=Array.from(nums).fill(-1);
    let stack=[];
    for(let i=0;i<nums.length;i++){
        while(stack.length&&map.get(nums[stack[stack.length-1]])<map.get(nums[i])){
            res[stack.pop()]=nums[i]
        }
        stack.push(i)
    }
    return res;
   }
   console.log(stack( [2,1,1,3,2,1]))