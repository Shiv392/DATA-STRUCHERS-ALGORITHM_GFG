// Given a binary tree of N nodes, where every node value is a number. Find the sum of all the numbers which are formed from root to leaf paths.
// Example 1:// Input :      
//            6                               
//          /   \                          
//         3     5                      
//       /   \     \
//      2    5      4             
//         /  \                        
//        7    4  
// Output: 13997
// Explanation :// There are 4 leaves, hence 4 root to leaf paths:
// Path                      Number
// 6->3->2                   632
// 6->3->5->7                6357
// 6->3->5->4                6354
// 6->5>4                    654   // Answer = 632 + 6357 + 6354 + 654 = 13997 
class Solution {
    treePathsSum(node){
        if(!node) return [];
        let res=0;
        const dfs=(root,value)=>{
            if(!root) return;
            if(!root.left && !root.right){
                res+= parseInt(value+root.key);
            } 
            value+=root.key;
            dfs(root.left,value);
            dfs(root.right,value);
        }
        dfs(node,"");
        return res;
    }
}