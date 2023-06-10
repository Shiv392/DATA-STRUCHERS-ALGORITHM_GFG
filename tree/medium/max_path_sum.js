// Given a binary tree, the task is to find the maximum path sum. The path may start and end at any node in the tree.
// Example 1:
// Input:
//      10
//     /  \
//    2   -25
//   / \  /  \
//  20 1  3  4
// Output: 32
// Explanation: Path in the given tree goes
// like 10 , 2 , 20 which gives the max
// sum as 32.
class Solution 
{
    //Function to return maximum path sum from any node in a tree.
    findMaxSum(root)
    {
        if(!root) return 0;
        let res=-Infinity;
        const pathSum=(root)=>{
            if(!root) return 0;
           let leftsum=pathSum(root.left);
           let rightsum=pathSum(root.right);
           let currsum=Math.max(root.data,leftsum+root.data,root.data+rightsum);
           res=Math.max(res,currsum,root.data+leftsum+rightsum);
           return currsum;
        }
        pathSum(root);
        return res;
    }
}