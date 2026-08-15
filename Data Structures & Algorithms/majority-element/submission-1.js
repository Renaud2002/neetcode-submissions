class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let num_map = new Map();
        let half = Math.floor(nums.length/2) + 1;
        let maj = nums[0];

        for (let i=0; i<nums.length; i++) {
            if (num_map.has(nums[i])) {
                let curr_count = num_map.get(nums[i]);
                if((curr_count+1) >= half){
                    maj =  nums[i];
                    break;
                }
                num_map.set(nums[i], curr_count +1);
            }
            else {
                num_map.set(nums[i], 1);
            }
        }

        return maj;
    }
}
