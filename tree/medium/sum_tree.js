// Given a Binary Tree. Return true if, for every node X in the tree other than the leaves, its value is equal to the sum of its left subtree's value and its right subtree's value. Else return false.
// An empty tree is also a Sum Tree as the sum of an empty tree can be considered to be 0. A leaf node is also considered a Sum Tree.
// Example 1:
// Input:
//     3
//   /   \    
//  1     2
// Output: 1
// Explanation:
// The sum of left subtree and right subtree is
// 1 + 2 = 3, which is the value of the root node.
// Therefore,the given binary tree is a sum tree.
class Solution {
	// Should return true if tree is Sum Tree, else false
  	isSumTree(root){
  	  if(!root) return true;
  	 let res=true;
  	 const dfs=(root)=>{
  	     if(!root) return 0;
  	     if(!root.left && !root.right) return root.key;
  	     let leftsum=dfs(root.left);
  	     let rightsum=dfs(root.right);
  	     if(leftsum+rightsum!=root.key) return res=false;
  	     return leftsum+rightsum+root.key;
  	 }
  	  dfs(root);
  	  return res;
  	}
}