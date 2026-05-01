class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map()
        const mid = Math.floor(nums.length / 2)
        let arr1 = nums.slice(0,mid)
        let arr2 = nums.slice(mid,nums.length)
        const addFreq = (n) => {
            if(n === undefined) return
            const currentFreq = frequency.get(n) ?? 0
            const newFreq = currentFreq + 1
            frequency.set(n,newFreq)

        }
        for(let i = 0; i <= Math.max(arr1.length, arr2.length) -1 ; i++ ){
            addFreq(arr1[i])
            addFreq(arr2[i])
        }
        const result = Array.from(frequency.entries()).sort((a,b) =>    a[1] - b[1] ).reverse()
        return result.map((v) => v[0]).slice(0,k)

    }
}
