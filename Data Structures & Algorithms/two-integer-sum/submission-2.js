class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let nums_arr = [];
        let res = [];

        for (let i=0; i<nums.length; i++) {
            let diff = target - nums[i];
            let ind = nums_arr.indexOf(nums[i]);
            // console.log(ind);
            // console.log(diff);

            if ( ind != -1) {
                res[0] = ind;
                res[1] = i;
                return res;
            }

            nums_arr.push(diff);
        }

        return res;
    }
}
