/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return null
        let tmp = null 
        let node = head 
        while(node){
            let next = node.next
            node.next = tmp
            if(!next){
                break
            }
            tmp = node 
            node = next 
        }
        return node
    }
}
