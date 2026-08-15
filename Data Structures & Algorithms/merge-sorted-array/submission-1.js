class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        let indx1 = m-1;
        let indx2 = n-1;
        let insertIndx = nums1.length - 1;

        while(indx1 >= 0 && indx2 >= 0) {
            if(nums1[indx1] <= nums2[indx2]){
                nums1[insertIndx] = nums2[indx2];
                indx2-=1;
                insertIndx-=1;
            } else {
                nums1[insertIndx] = nums1[indx1];
                indx1-=1;
                insertIndx-=1;
            }
        }

        if (indx2 >= 0){
            while(insertIndx >= 0){
                nums1[insertIndx] = nums2[indx2]
                indx2-=1;
                insertIndx-=1;
            }
        }


    }
}
