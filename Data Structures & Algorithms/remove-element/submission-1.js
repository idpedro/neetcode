class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let index = 0
        for(let num of nums ){
            if(num === val) continue
            nums[index] = num
            index++
        }
        return index 

    }
}
