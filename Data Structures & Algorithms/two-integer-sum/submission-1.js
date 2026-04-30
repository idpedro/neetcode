class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let pointerA = 0
        let pointerB = 1
        while(pointerA < nums.length){
            let n1 = nums[pointerA]
            let n2 = nums[pointerB]
            if(n1 + n2 === target){
                break
            }
            if(pointerB === nums.length -1){
                pointerA++
                pointerB = pointerA +1
                continue
            }
            pointerB++


        }
        return [pointerA,pointerB]
    }
}
