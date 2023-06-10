// 1
// /   \
// 3     2
// Output: 3 1 2
// Explanation:
// First case represents a tree with 3 nodes
// and 2 edges where root is 1, left child of
// 1 is 3 and right child of 1 is 2.
//so simple like top view but in this case change every occurance of hd with new node value
class Solution
{
    //Function to return a list containing the bottom view of the given tree.
    bottomView(root)
    {
        if(!root) return [];
        let queue=[{node:root,hd:0}];
        let map=new Map();
        while(queue.length){
            let {node,hd}=queue.shift();
            if(!map.has(hd)){
                map.set(hd,node.data);
            }
            else if(map.has(hd)){
                map.set(hd,node.data)
            }
            if(node.left) queue.push({node:node.left,hd:hd-1});
            if(node.right) queue.push({node:node.right,hd:hd+1});
        }
        let sortedkey= Array.from(map.keys()).sort((a,b)=>a-b);
        return sortedkey.map(ele=> map.get(ele));
    }
}