// Given a Binary Tree. Check whether all of its nodes have the value equal to the sum of their child nodes.
// Example 1:
// Input:
//      10
//     /
//   10 
// Output: 1// Explanation: Here, every node is sum of
// its left and right child.
// Example 2:
// Input:
//        1
//      /   \
//     4     3
//    /  \
//   5    N
// Output: 0// Explanation: Here, 1 is the root node
// and 4, 3 are its child nodes. 4 + 3 =
// 7 which is not equal to the value of
// root node. Hence, this tree does not
// satisfy the given conditions.
class Solution {
    //Function to check whether all nodes of a tree have the value 
    //equal to the sum of their child nodes.
    isSumProperty(node)
    {
       if(!node) return 1;
       if(!node.left && !node.right) return 1;
       let sum=0;
       if(node.left) sum+=node.left.data;
       if(node.right) sum+=node.right.data;
       if(node.data!=sum) return 0;
       return (this.isSumProperty(node.left)==1 && this.isSumProperty(node.right)==1) ? 1 : 0
    }
}