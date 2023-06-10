// Given a binary tree. Find the preorder traversal of the tree without using recursion.
// Example 1:
// Input:
//            1
//          /   \
//         2     3
//       /  \
//      4    5
// Output: 1 2 4 5 3
// Explanation:
// Preorder traversal (Root->Left->Right) of 
// the tree is 1 2 4 5 3.
class Solution {
    //Return a list containing the preorder traversal of the given tree
  preOrder(root){
      if(!root) return [];
      let res=[],queue=[root];
      while(queue.length){
          let curr=queue.pop();
          res.push(curr.key);
         if(curr.right) queue.push(curr.right);
         if(curr.left) queue.push(curr.left);
      }
      return res;
  }
}