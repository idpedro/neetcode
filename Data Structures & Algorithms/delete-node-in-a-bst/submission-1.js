/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if(root === null) return null

        if(root.val < key){
            root.right = this.deleteNode(root.right,key)
        }else if(root.val > key){
            root.left = this.deleteNode(root.left,key)
        } else {
            if(root.left === null)
                return root.right
            if(root.right === null)
                return root.left
            const min = this.findMinNode(root.right)
            console.log(min)
            root.val = min.val
            root.right = this.deleteNode(root.right, min.val);
        }
        
        return root
    }

    findMinNode(node){
        let currentNode = node
        while(currentNode != null && currentNode.left != null){
            currentNode = currentNode.left
        }
        return currentNode
    }
    
}
