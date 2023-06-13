// Given a Binary Tree, convert it to Binary Search Tree in such a way that keeps the original structure of Binary Tree intact.
// Example 1:
// Input:
//       1
//     /   \
//    2     3
// Output: 1 2 3
class Solution {
    binaryTreeToBST(root){
    if(!root) return null;
    const nodes=[];
    const inorder=(root)=>{
        if(!root) return ;
        inorder(root.left);
        nodes.push(root);
        inorder(root.right);
    }
    inorder(root);
    nodes.sort((a,b)=>a.data-b.data);
    //construct bst 
    const bst=(start,end)=>{
        if(start>end) return null;
        let mid=Math.floor((start+end)/2);
        let node=nodes[mid];
        node.left= bst(start,mid-1);
        node.right=bst(mid+1,end);
        return node;
    }
    return bst(0,nodes.length-1);
    
    }
}