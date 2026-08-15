class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res_arr = [];
        
        for (let i=0; i<strs.length; i++) {
            let curr_arr = [];
            console.log(`started word: ${strs[i]}`)
            curr_arr.push(strs[i]);
            for (let k=i+1; k<strs.length; k++) {
                console.log(`current word: ${strs[k]}`);
                if (isAnagrams(strs[i], strs[k])) {
                    console.log(strs[k]);
                    curr_arr.push(strs[k]);
                    strs.splice(k, 1); // removing from the list its part of an anagram
                    console.log(strs);
                    k-=1;
                    // i-=1;
                }
            }
            // strs.splice(i, 1);
            res_arr.push(curr_arr);
        }

        return res_arr;
    }
}

function isAnagrams(str1, str2) {
    let str1_arr = str1.split('');
    let str2_arr = str2.split('');
    str1_arr.sort();
    str2_arr.sort();

    let sorted_str1 = str1_arr.join('');
    let sorted_str2 = str2_arr.join('');

    return (sorted_str1 === sorted_str2);
}
