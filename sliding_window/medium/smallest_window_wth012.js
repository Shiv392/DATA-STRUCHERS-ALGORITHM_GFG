// Given a string S consisting of the characters 0, 1 and 2. Your task is to find the length of the smallest substring of string S that contains all the three characters 0, 1 and 2. If no such substring exists, then return -1.
// Example 1:
// Input:
// S = "01212"
// Output:
// 3
function stack(nums){
    let map=new Map(),res=Infinity;
    nums=nums.split('');
    let left=0,right=0;
    while(right<nums.length){
        map.set(nums[right],map.get(nums[right])+1||1);
        while(map.size==3){
            res=Math.min(res,right-left+1);
            if(map.get(nums[left])==1) map.delete(nums[left]);
            else map.set(nums[left],map.get(nums[left])-1);
            
            left++;
        }
    }
    return res;
    }
    console.log(stack("01212"))