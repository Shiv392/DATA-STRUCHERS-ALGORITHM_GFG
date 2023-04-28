// Given a Binary Tree, convert it into its mirror.
// MirrorTree1            
// Example 1:
// Input:
//       1
//     /  \
//    2    3
// Output: 3 1 2
// Explanation: The tree is
//    1    (mirror)  1
//  /  \    =>      /  \
// 2    3          3    2
// The inorder of mirror is 3 1 2
/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    // Function to convert a binary tree into its mirror tree.
    mirror(node) {
        if(!node) return null; 
        const left=this.mirror(node.left);
        const right=this.mirror(node.right);
        node.left=right;
        node.right=left;
        return node;
    }
}