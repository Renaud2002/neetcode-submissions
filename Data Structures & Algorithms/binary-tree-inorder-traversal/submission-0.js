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

    traverse(nums, node) {
        if (node === null) {return nums;}
        this.traverse(nums, node.left);
        nums.push(node.val);
        this.traverse(nums, node.right);
    }
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        if (root === null) {return [];}
        let nums = [];
        this.traverse(nums, root);
        return nums;
    }
}
