// Given a Binary Tree. Check whether it is Symmetric or not, i.e. whether the binary tree is a Mirror image of itself or not.
// Example 1:// Input:
//          5
//        /   \
//       1     1
//      /       \
//     2         2
// Output: True
// Explanation: Tree is mirror image of
// itself i.e. tree is symmetric
// Example 2:
// Input:
//          5
//        /   \
//       10     10
//      /  \     \
//     20  20     30
// Output: False
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
 * @return {boolean}
*/
class Solution {
    // return true/false denoting whether the tree is Symmetric or not
  isSymmetric(root){
      if(!root) return true;
      const check=(left,right)=>{
         if(!left && !right) return true;
         if(!left || !right) return false;
         if(left.key!=right.key) return false;
         return check(left.left,right.right) && check(left.right,right.left);
      }
      return check(root.left,root.right);
  }
}