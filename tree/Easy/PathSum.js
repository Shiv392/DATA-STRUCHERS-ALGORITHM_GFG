// Given a binary tree and an integer S, check whether there is root to leaf path with its sum as S.
// Example 1:
// Input:
// Tree = 
//             1
//           /   \
//         2      3
// S = 2
// Output: 0
// Explanation:
// There is no root to leaf path with sum 2.
// Example 2:
// Input:
// Tree = 
//             1
//           /   \
//         2      3
// S = 4
// Output: 1
// Explanation:
// The sum of path from leaf node 3 to root 1 is 4
/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} S
 * @return {boolean}
*/
class Solution {
    hasPathSum(root,S){
        if(!root) return false;
        let res=false;
        const dfs=(root,sum)=>{
            if(!root.left && !root.right){
                if(S== sum + root.key) res=true;
            }
           if(root.left) dfs(root.left,sum+root.key);
       if(root.right)	    dfs(root.right,sum+root.key);
        }
        dfs(root,0);
        return res;
    }
}