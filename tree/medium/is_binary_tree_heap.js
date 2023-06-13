// Given a binary tree. The task is to check whether the given tree follows the max heap property or not.
// Note: Properties of a tree to be a max heap - Completeness and Value of node greater than or equal to its child.
// Example 1:
// Input:
//       5
//     /  \
//    2    3
// Output: 1
class Solution {
    isHeap(root) {
        if(!root) return true;
       let queue=[root],flag=false;
       while(queue.length){
   let node=queue.shift();
      if(node.left){
          if(flag){
              return false;
          }
          if(node.left.data > node.data){
              return false
          }
          queue.push(node.left);
          
      }
      else{
              flag=true;
          }
      if(node.right){
          if(flag){
              return false;
          }
          if(node.right.data > node.data){
              return false;
          }
          queue.push(node.right);
      }
      else{
          flag=true;
      }
       }
       return flag;
    }
}