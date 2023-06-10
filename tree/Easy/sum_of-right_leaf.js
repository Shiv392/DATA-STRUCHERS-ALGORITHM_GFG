// Given a Binary Tree of size N, your task is to complete the function rightLeafSum(), which should return the sum of all the leaf nodes that are the right child of their parent of the given binary tree.
// Example 1:
// Input :
//          52
//         /    \
//       12      55
//      /  \     /  \
//     83   6   17  82
//    /    /  \   
//   56   61  35
// Output :
// 117
// Explanation:
// All the right leaf nodes
// presents are 35, 82 which
// sums up to 117
class Solution {
    rightLeafSum(root) {
        if(!root) return 0;
        let sum=0;
        const dfs=(root,temp)=>{
            if(!root) return ;
            if(!root.left && !root.right && temp) sum+=root.key;
            dfs(root.left,false);
            dfs(root.right,true)
        }
        dfs(root,true);
        return sum;
    }
}