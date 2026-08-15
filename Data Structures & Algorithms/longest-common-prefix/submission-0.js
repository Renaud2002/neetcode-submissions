class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */

    longestCommonPrefix(strs) {
        let prefix = strs[0];

        for (let i=1; i<strs.length; i++) {
            prefix = updatePrefix(prefix, strs[i]);
        }

        return prefix;
    }
}

function updatePrefix (currPrefix, currWord) {
    let len = Math.min(currPrefix.length, currWord.length);
    console.log(`currPrefix ${currPrefix}`);
    console.log(`currWord ${currWord}`);
    let newPrefix = "";

    for (let i=0; i<len; i++) {
        if(currPrefix[i] === currWord[i]){
            newPrefix+=currPrefix[i];
            console.log(`appended new prefix`)
        } else {
            break;
        }
    }

    return newPrefix;
}
