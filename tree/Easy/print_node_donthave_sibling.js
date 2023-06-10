// Given a Binary Tree of size N, find all the nodes which don't have any sibling. You need to return a list of integers containing all the nodes that don't have a sibling in sorted order.
// Note: Root node can not have a sibling so it cannot be included in our answer.
// Example 1:
// Input :
//        37
//       /   
//     20
//     /     
//   113 
// Output: 20 113
// Explanation: 20 and 113 dont have any siblings.
class Solution {
  	noSibling(root){
  		if(!root) return [];
  		let res=[];
  		const dfs=(root)=>{
  		    if(!root) return ;
  		    if(root.left==null && root.right!=null){
  		        res.push(root.right.data);
  		    }
  		    if(root.right==null && root.left!=null){
  		        res.push(root.left.data);
  		    }
  		    dfs(root.left);
  		    dfs(root.right);
  		}
  		dfs(root);
  		return res.length==0 ? [-1] : res.sort((a,b)=>a-b);
  	}
}