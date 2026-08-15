class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();

        let l = 0;
        let r = s.length-1;

        const isAlphanumeric = char => /^[a-z0-9]$/i.test(char);

        while(l<r) {
            if(!isAlphanumeric(s[l])) {
                l+=1;
                continue;
            }
            if(!isAlphanumeric(s[r])) {
                r-=1;
                continue;
            }

            if (s[l] !== s[r]){
                console.log(s[l]);
                console.log(s[r]);
                return false;
            }
            
            l+=1;
            r-=1;
        }

        return true;
    }
}
