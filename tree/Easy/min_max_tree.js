// Given a Binary Tree, find maximum and minimum elements in it.
// Example 1:
// Input: 
// Output: 11 1
// Explanation:                           
//  The maximum and minimum element in 
// this binary tree is 11 and 1 respectively.
// Example 2:
// Input: 
//            6
//         / \
//        5   8
//       /
//      2
// Output: 8 2
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


/**
 * @param {Node} root
 * @return {number}
 */

class Solution {
  findMax(root) {
   if(root.right==null) return root.data;
   else return this.findMax(root.right);
  }
  findMin(root) {
    if(root.left==null) return root.data;
    else return this.findMin(root.left);
  }
}