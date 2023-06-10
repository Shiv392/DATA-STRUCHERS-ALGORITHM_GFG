// The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two end nodes. The diagram below shows two trees each with diameter nine, the leaves that form the ends of the longest path are shaded (note that there is more than one path in each tree of length nine, but no path longer than nine nodes). 
// Example 1:
// Input:
//        1
//      /  \
//     2    3
// Output: 3
class Solution {
    // Function to return the diameter of a Binary Tree.
    diameter(root) {
       if(!root) return 0;
       let res=0;
       const dfs=(root)=>{
           if(!root) return 0;
           const left= dfs(root.left);
           const right=dfs(root.right);
           res=Math.max(res,left+right);
           return Math.max(left,right)+1
       }
       dfs(root);
       return res+1;
    }
}