class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const points = []
        const actions = {
            "+":()=>{
                let n = points.length - 1
                let v1 = points[n - 1] ?? 0
                let v2 = points[n] ?? 0
                points.push(v1+v2)

            },
            "C":()=>{
                points.pop()
            },
            "D":()=>{
                let n = points.length - 1
                let point = points[n] ?? 0
                points.push(point * 2)
            }
        }
        for ( let op of operations){
            if(actions[op]){
                actions[op]()
                continue
            }
            points.push(Number(op))
        }
        return points.reduce((a,b) => a+b,0)
    }
}
