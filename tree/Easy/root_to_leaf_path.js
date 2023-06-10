// Given a Binary Tree of size N, you need to find all the possible paths from root node to all the leaf node's of the binary tree.
// Example 1:
// Input:
//        1
//     /     \
//    2       3
// Output: 1 2 #1 3 #
class Solution {
    Paths(root){
      if(!root) return [];
      let res=[];
      const dfs=(root,temp)=>{
          if(!root) return ;
          temp.push(root.data);
          if(!root.left && !root.right){
              res.push([...temp]);
         }
         if(root.left) dfs(root.left,temp);
         if(root.right) dfs(root.right,temp);
         temp.pop();
      }
      dfs(root,[]);
      return res;
    }
}