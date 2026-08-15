class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let sp = 0;
        let fp = 1;

        while (fp < nums.length){
            if (nums[sp] === nums[fp]) {
                fp+=1;
            } else {
                nums[sp+1] = nums[fp];
                sp+=1;
                fp+=1;
            }
        }

        return sp+1;
    }
}
