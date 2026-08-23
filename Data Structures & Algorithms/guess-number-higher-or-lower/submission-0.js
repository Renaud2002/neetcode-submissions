/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     * 
     * 1 2 3 4 5 6
     */
    guessNumber(n) {

        let l = 0;
        let r = n;
        let guessNum = Math.floor((l+r)/2);

        while (guess(guessNum) !== 0){
            if (guess(guessNum) === 1) {
                l = guessNum +1;
            } else {
                r = guessNum -1;
            }
            guessNum = Math.floor((l+r)/2);
        }

        return guessNum;

    }
}
