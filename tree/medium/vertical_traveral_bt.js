// Given a Binary Tree, find the vertical traversal of it starting from the leftmost level to the rightmost level.
// If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.
// Example 1:
// Input:
//            1
//          /   \
//        2       3
//      /   \   /   \
//    4      5 6      7
//               \      \
//                8      9           
// Output: 
// 4 2 1 5 6 3 8 7 9 
class Solution 
{
    //Function to find the vertical order traversal of Binary Tree.
    verticalOrder(root)
    {
       if(!root) return [];
       let res=[],queue=[{node:root,hd:0}],map={};
       while(queue.length){
           let n=queue.length;
           for(let i=0;i<n;i++){
               let {node,hd}=queue.shift();
               if(!map[hd]){
                   map[hd]=[];
               }
               map[hd].push(node.data);
               if(node.left) queue.push({node:node.left,hd:hd-1});
               if(node.right) queue.push({node:node.right,hd:hd+1});
           }
       }
       const sortedkeys= Array.from(Object.keys(map)).sort((a,b)=>a-b);
       for(let i=0;i<sortedkeys.length;i++){
           res.push(...map[sortedkeys[i]]);
       }
       return res;
    }
}