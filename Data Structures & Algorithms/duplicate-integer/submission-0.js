class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let list = [];
        let res = false;
        nums.forEach((item)=> {
            // console.log(item);
            if(list.includes(item)){
                // console.log("here");
                res = true;
            }
            list.push(item);
        });
        // console.log(list)
        return res;
    }
}
