// Input: 
// N = 4, arr[] = [1 3 2 4]
// Output:
// 3 4 4 -1
// Explanation:
// In the array, the next larger element 
// to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? 
// since it doesn't exist, it is -1.
class Solution
{
    //Function to find the next greater element for each element of the array.
    nextLargerElement(arr, n)
    {
       let map=new Map();
        let res=Array.from(arr).fill(-1);
       let stack=[];
       for(let i=0;i<arr.length;i++){
           while(stack.length&&arr[stack[stack.length-1]]<arr[i]){
              res[stack[stack.length-1]]=arr[i];
              stack.pop();
           }
           stack.push(i);
       }
       
       return res
    }
}