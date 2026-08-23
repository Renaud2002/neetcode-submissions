class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length;

        while (l<r){
            let mid = Math.floor((l+r)/2);
            console.log(mid);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                if (l===mid) return -1;
                l = mid;
            } else {
                r = mid;
            }
        }

        return -1;
    }
}
