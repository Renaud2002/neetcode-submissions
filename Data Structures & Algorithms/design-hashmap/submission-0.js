class MyHashMap {
    hashMap = []
    constructor() {}

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let obj = {
            "key": key,
            "value": value
        }

        let found = false;

        for (let i=0; i<this.hashMap.length; i++) {
            if (this.hashMap[i].key === key) {
                this.hashMap.splice(i, 1);
                this.hashMap.push(obj);
                found = true;
            }
        }

        if (!found) { this.hashMap.push(obj); }
        
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {

        for (let i=0; i<this.hashMap.length; i++) {
            if (this.hashMap[i].key === key) { 
                return this.hashMap[i].value;
            }
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        for (let i=0; i<this.hashMap.length; i++) {
            if (this.hashMap[i].key === key) {
                this.hashMap.splice(i, 1);
            }
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
