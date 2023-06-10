// Given a binary tree of size N+1, your task is to complete the function tiltTree(), that return the tilt of the whole tree. The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null nodes are assigned tilt to be zero. Therefore, tilt of the whole tree is defined as the sum of all nodes’ tilt.
// Examples 1:
// Input: 
//        1
//       / \
//      2   3
// Output: 1
// Explanation:
// Tilt of node 2 : 0
// Tilt of node 3 : 0
// Tilt of node 1 : |2-3| = 1
// Tilt of binary tree : 0 + 0 + 1 = 1
class Solution {
    tiltTree(root) {
      let res=0;
      const dfs=(root)=>{
          if(!root ) return 0;
          let leftnode= dfs(root.left);
          let rightnode=dfs(root.right);
          res+= Math.abs(leftnode-rightnode);
          return leftnode+rightnode+root.data;
  }
      dfs(root);
      return res;
    }
  }