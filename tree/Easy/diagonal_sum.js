// Consider Red lines of slope -1 passing between nodes (in following diagram). The diagonal sum in a binary tree is the sum of all nodes data lying between these lines. Given a Binary Tree of size N, print all diagonal sums.
// For the following input tree, output should be 9, 19, 42.
// 9 is sum of 1, 3 and 5.
// 19 is sum of 2, 6, 4 and 7.
// 42 is sum of 9, 10, 11 and 12.
// DiagonalSum
// Example 1:
// Input:
//          4
//        /   \
//       1     3
//            /
//           3
// Output: 7 4 
class Solution {
    diagonalSum(root){
     if(!root) return 0;
     let res=[],queue=[root];
     while(queue.length){
         let n=queue.length,sum=0;
         for(let i=0;i<n;i++){
             let node=queue.shift();
             while(node){
                 sum+=node.data;
                 if(node.left){
                     queue.push(node.left);
                 }
                 node=node.right;
             }
         }
         res.push(sum);
     } 
     
     return res;
    }
}