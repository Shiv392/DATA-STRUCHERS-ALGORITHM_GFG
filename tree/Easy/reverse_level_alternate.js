// Given a complete binary tree, reverse the nodes present at alternate levels.
// Example 1:
// Input:
//              1
//           /   \
//         3      2
// Output:
//              1
//           /   \
//         2      3
// Explanation: Nodes at level 2 are reversed.
class Solution {
    reverseAlternate(root){
    if(!root) return 0;
    let level=0;
    const dfs=(root1,root2,index)=>{
        if(!root1 || !root2) return;
        if(index%2==0){
            [root1.data,root2.data]=[root2.data,root1.data];
        }
        dfs(root1.left,root2.right,index+1);
        dfs(root1.right,root2.left,index+1);
    }
    dfs(root.left,root.right,0);
    return root;
    }
}