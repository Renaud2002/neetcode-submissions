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
     * 
     * 0 -> 1 -> 2 -> 3
     * 3 -> 2 -> 1 -> 0
     */
    reverseList(head) {

        if (!head) return head;
        let temp = head;
        let prev1 = null;
        let prev2 = null;

        while (temp.next != null){
            prev1 = temp;
            temp = temp.next;
            prev1.next = prev2;
            prev2 = prev1;
        }

        temp.next = prev2;
        return temp;

    }
}
