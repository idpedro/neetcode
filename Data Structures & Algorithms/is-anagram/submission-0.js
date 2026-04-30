class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sSorted = s.split("").toSorted()
        const tSorted = t.split("").toSorted()
        for(let i = 0; i <= sSorted.length; i++){
            if(sSorted[i] !== tSorted[i]) return false
        }
        return true

    }
}
