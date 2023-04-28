// Given a binary tree of size N, find all the nodes at odd levels.Root is considered at level 1.
// Example 1:
// Input: 
//           1
//        /     \
//       2       3
//     /   \       \
//    4     5       6
//         /  \     /
//        7    8   9
// Output  1 4 5 6
class Solution {
    nodesAtOddLevels(root) {
      if(!root) return [];
      let level=true,queue=[root],res=[];
      while(queue.length){
          let size=queue.length;
          for(let i=0;i<size;i++){
              let curr=queue.shift();
              if(level==true){
                  res.push(curr.data);
              }
              if(curr.left) queue.push(curr.left);
              if(curr.right) queue.push(curr.right);
          }
          level=!level
          }
      return res;
    }
  }