// Given the binary Tree of and two-node values. Check whether the two-node values are cousins of each other or not.
// Example 1:
// Input:
//       1
//     /   \
//    2     3
// a = 2, b = 3
// Output: 0
// Example 2:
// Input:
//        1
//      /   \ 
//     2     3
//    /       \
//   5         4 
// a = 5, b = 4
// Output: 1
class Solution {
    isCousins(root,a,b){
    let aparent=null;
    let bparent=null;
    let adepth=-1,bdepth=-1;
    const dfs=(root,parent,depth)=>{
        if(!root) return;
        if(root.data==a){
            aparent=parent;
            adepth=depth;
        }
        else if(root.data==b){
            bparent=parent;
            bdepth=depth;
        }
        dfs(root.left,root,depth+1);
        dfs(root.right,root,depth+1);
    }
    dfs(root,null,0);
    return aparent!=bparent && adepth==bdepth;
    }
}