class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs) {
        // ["...",".."] -> "_.-"
        return strs.reduce((acc,current)=>{
            return acc + `[:]` + current
        },"")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = str.split("[:]")
        result.shift()
        return  result
    }
}
