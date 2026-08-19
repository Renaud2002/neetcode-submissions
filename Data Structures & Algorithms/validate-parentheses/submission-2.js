class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if (s.length%2 !== 0) {return false}

        const info = {
            "(":")",
            "[":"]",
            "{":"}"
        }

        let stack = [];

        for (let i=0; i<s.length; i++) {
            if (Object.hasOwn(info,s[i])){
                stack.push(s[i]);
            }else {
                if (info[stack.pop()] !== s[i]) {return false;}
            }
        }


        return stack.length === 0 ? true : false;
    }
}
