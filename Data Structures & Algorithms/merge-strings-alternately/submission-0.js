class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let idx1 = 0;
        let idx2 = 0;

        let retStr = "";

        while(idx1 < word1.length && idx2 < word2.length) {
            retStr += word1[idx1];
            retStr += word2[idx2];
            idx1 += 1;
            idx2 += 1;
        }

        if (idx1 < word1.length) {
            retStr += word1.substring(idx1, word1.length);
        }

        if (idx2 < word2.length) {
            retStr += word2.substring(idx2, word2.length);
        }

        return retStr;
    }

}
