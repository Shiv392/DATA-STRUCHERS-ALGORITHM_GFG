// Given 2 Arrays of Inorder and preorder traversal. The tree can contain duplicate elements. Construct a tree and print the Postorder traversal. 
// Example 1:
// Input:
// N = 4
// inorder[] = {1 6 8 7}
// preorder[] = {1 6 7 8}
// Output: 8 7 6 1
class Solution {
  	buildTree(inorder,preorder,n){
  	if(inorder.length==0 || preorder.length==0) return null;
  	let rootval=preorder[0];
  	let root= new Node(rootval);
  	let rootindex= inorder.indexOf(rootval);
  	let leftinorder=inorder.slice(0,rootindex);
  	let rightinorder=inorder.slice(rootindex+1);
  	
  	let  leftpreorder=preorder.slice(1,rootindex+1);
  	let rightpreorder=preorder.slice(rootindex+1);
  	
  	root.left= this.buildTree(leftinorder,leftpreorder);
  	root.right=this.buildTree(rightinorder,rightpreorder);
  	
  	return root;
  	}
}