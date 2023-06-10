// Given a BST and an integer. Find the least absolute difference between any node value of the BST and the given integer.
// Example 1:
// Input:
//         10
//       /   \
//      2    11
//    /  \ 
//   1    5
//       /  \
//      3    6
//       \
//        4
// K = 13
// Output: 2// Explanation: K=13. The node that has
// value nearest to K is 11. so the answer
// is 2
class Solution 
{
    //Function to find the least absolute difference between any node
    //value of the BST and the given integer.
    minDiff(root, k)
    {
        if(!root) return 0;
        let res=Infinity;
        const dfs=(root)=>{
            if(!root) return;
            res=Math.min(res,Math.abs(root.data-k));
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root);
        return res;
    }
}