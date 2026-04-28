class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let result = [...arr]
        if(result.length > 1) {
        let bigIndex = -1
        let currentIndex = 0
        while(currentIndex < arr.length){
            if(currentIndex >= bigIndex){
                bigIndex = currentIndex+1
                for(let i = currentIndex + 1; i <= arr.length;i++){
                    let currentValue = arr[bigIndex] ?? 0
                    let indexValue = arr[i]
                    bigIndex = currentValue < indexValue  ? i : bigIndex
                }
            }
            result[currentIndex] = result[bigIndex]
            currentIndex++
        }
        }
        result[result.length-1] = -1; 
        return result
        
    }
}
