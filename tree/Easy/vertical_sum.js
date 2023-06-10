// Given a Binary Tree, find vertical sum of the nodes that are in same vertical line. Print all sums through different vertical lines starting from left-most vertical line to right-most vertical line.
// Example 1:
// Input:
//        1
//     /   \
//   2      3
//  / \    / \
// 4   5  6   7
// Output: 4 2 12 3 7
class Solution {
    verticalSum(root){
    if(!root) return [];
    let map={};
    const dfs=(root,hd,map)=>{
        if(!root) return ;
        map[hd]= (map[hd]||0)+root.data;
        dfs(root.left,hd-1,map);
        dfs(root.right,hd+1,map);
    }
    dfs(root,0,map);
  let sortedkeys= Array.from(Object.keys(map)).sort((a,b)=>a-b);
  let res=[];
  for(let i=0;i<sortedkeys.length;i++){
      res.push(map[sortedkeys[i]]);
  }
  return res;
    }
}