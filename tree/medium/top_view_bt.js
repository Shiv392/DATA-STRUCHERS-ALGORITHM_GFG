// 1
// /    \
// 2      3
// Output: 2 1 3
class Solution
{
   topView(root)
    {
        if(!root) return [];
        let map=new Map();
        let queue=[];
        queue.push({node:root,hd:0});
        while(queue.length){
            const {node,hd}=queue.shift();
            if(!map.has(hd)){
                map.set(hd,node.data);
            }
            if(node.left){
                queue.push({node:node.left,hd:hd-1})
            }
            if(node.right){
                queue.push({node:node.right,hd:hd+1});
            }
        }
        const sortedkey= Array.from(map.keys()).sort((a,b)=>a-b);
        const resarr=sortedkey.map((key)=> map.get(key));
        return resarr;
    }
}