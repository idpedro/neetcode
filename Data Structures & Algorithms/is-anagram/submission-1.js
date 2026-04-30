class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const feqS = {}
        const feqT = {}


        for(let i = 0; i < s.length; i++){
            feqS[s[i]] = (feqS[s[i]] ?? 0)+ 1 
            feqT[t[i]] = (feqT[t[i]] ?? 0)+ 1 
        }
        for(let letter of Object.keys(feqS)){
            if(feqT[letter] !== feqS[letter]){
                return false
            }
        }
        return true

    }
}
