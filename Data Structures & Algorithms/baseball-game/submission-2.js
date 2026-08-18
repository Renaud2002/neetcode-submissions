class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = [];
        let currOp;

        for(let i=0; i<operations.length; i++){
            currOp = operations[i];
            if (Number.isInteger(parseInt(currOp, 10))) {
                record.push(parseInt(currOp, 10));
            } else if(currOp === "+") {
                record.push(record[record.length-2] + record[record.length-1]);
            } else if(currOp === "D") {
                record.push(record[record.length-1]*2);
            } else {
                record.pop();
            }
        }

        const sum = record.reduce((accumulator, current) => accumulator + current, 0);

        return sum;


    }
}
