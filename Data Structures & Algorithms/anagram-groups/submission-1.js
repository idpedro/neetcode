class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashmap = new Map()
        
        for(let i =0; i < strs.length; i++ ){
            const hash = strs[i].split("").sort().join()
            const newList = hashmap.get(hash) ?? []
            newList.push(strs[i])
            hashmap.set(hash,newList)
        }
        return Array.from(hashmap.values())
    }
}
