// Given a Binary Tree of size N. Find the sum of all the leaf nodes that are left child of their parent of the given binary tree.
// Example 1:
// Input:
//        1
//      /   \
//     2     3
// Output: 2
// Example 2:
// Input : 
//          1
//         /  \
//        2    3
//      /  \     \
//     4    5     8 
//   /  \        /  \
//  7    2      6    9
// Output: 13
// Explanation:
// sum = 6 + 7 = 13
class Solution {
  	leftLeavesSum(root){
  		if(!root) return 0;
  		let res=0;
  		const dfs=(root,isleft)=>{
  		    if(!root) return;
  		    if(!root.left && !root.right && isleft){
  		        res+=root.data;
  		    }
  		    dfs(root.left,true);
  		    dfs(root.right,false);
  		}
  		dfs(root,false);
  		return res;
  	}
}