// Given inorder and postorder traversals of a Binary Tree in the arrays in[] and post[] respectively. The task is to construct the binary tree from these traversals.
// Example 1:
// Input:
// N = 8
// in[] = 4 8 2 5 1 6 3 7
// post[] =8 4 5 2 6 7 3 1
// Output: 1 2 4 8 5 3 6 7
// Explanation: For the given postorder and
// inorder traversal of tree the  resultant
// binary tree will be
//            1
//        /      \
//      2         3
//    /  \      /  \
//   4    5    6    7
//    \
//      8
class Solution 
{
    //Function to return a tree created from postorder and inoreder traversals.
    buildTree(ino, post, n)
    {
       if(ino.length==0 || post.length==0) return null;
       let rootval=post[post.length-1];
       let root= new Node(rootval);
       let rootindex=ino.indexOf(rootval);
       //left and rightsubtree from inorder;
       let leftinorder=ino.slice(0,rootindex);
       let rightinorder=ino.slice(rootindex+1);
       
       let leftpostorder=post.slice(0,leftinorder.length);
       let rightpostorder=post.slice(leftinorder.length,post.length-1);
       
       root.left=this.buildTree(leftinorder,leftpostorder);
       root.right=this.buildTree(rightinorder,rightpostorder);
       return root;
    }
}