class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let result = [...arr]
        let max = -1
        let end = arr.length - 1
        for(let i = end; i >= 0; i--){
            result[i] = max
            max = arr[i] >= max ? arr[i] : max
        }
        result[end] = -1
        return result
        
    }
}
