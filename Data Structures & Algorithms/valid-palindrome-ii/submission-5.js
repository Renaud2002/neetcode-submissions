class Solution {

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


    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        
        let l = 0;
        let r = s.length-1;

        while(l<r) {
            const isAlphanumeric = char => /^[a-z0-9]$/i.test(char);

            if(!isAlphanumeric(s[l])) {
                l+=1;
                continue;
            }
            if(!isAlphanumeric(s[r])) {
                r-=1;
                continue;
            }

            if (s[l]!==s[r]){
                return this.isPalindrome(s.substring(l,r)) || this.isPalindrome(s.substring(l+1,r+1));
                // if (s[l]===s[r-1]){
                //     r-=1;
                //     ;
                // } else if (s[l+1]===s[r]){
                //     l+=1;
                //     continue
                // } else {
                //     return false;
                // }
            } 

            l+=1;
            r-=1;
        }

        return true;
    }
}
