class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        for(let char of s){
            if(t!=""){
                t = t.replace(char, "");
            }else{
                return false
            }
            
        }

        if(t==""){
            return true;
        }

        return false;
    }
}
