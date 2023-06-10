// Given a Binary Tree, write a function to check whether the given Binary Tree is Complete Binary Tree or not. A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes should be as much close to left as possible.
// Example 1:
// Input:
//        1
//       / \
//      2   3
// Output:
// Complete Binary Tree
class Solution {
    //Function to check whether a binary tree is balanced or not.
    isComplete(root)
    {
if(!root) return true;
let flag=true;
let queue=[root];
while(queue.length){
   let node=queue.shift();
   if(!node){
       for(let remnode of queue){
           if(remnode){
               flag=false;
               break;
           }
       }
       break;
   }
   queue.push(node.left);
   queue.push(node.right);
}
return flag;
    }
}