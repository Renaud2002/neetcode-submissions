class Solution {
    /**
     * @param {number[]}
     * @return {number[]}
     */
    sortArray(nums) {
        mergeSort(nums);
        return nums;
    }
}

function mergeSort (nums) {

    let len = nums.length;
    if(len <= 1) { return } // basecase

    let middle = Math.floor(len/2);
    let right_arr = [];
    let left_arr = [];

    for(let i=0; i<nums.length; i++) {
        if (i < middle) {
            left_arr.push(nums[i]);
        } else {
            right_arr.push(nums[i]);
        }
    }

    mergeSort(left_arr);
    mergeSort(right_arr);
    merge(nums, left_arr, right_arr);
}

function merge (arr, left_arr, right_arr) {

    let left_size = left_arr.length;
    let right_size = right_arr.length;
    let i = 0, l = 0, r = 0;

    while (l < left_size && r < right_size) {
        if (left_arr[l] <= right_arr[r]) {
            arr[i] = left_arr[l];
            l++;
            i++;
        }else {
            arr[i] = right_arr[r];
            r++;
            i++;
        }
    }

    while (l<left_size) {
        arr[i] = left_arr[l];
        l++;
        i++;
    }
    while (r<right_size) {
        arr[i] = right_arr[r];
        r++;
        i++;
    }
}