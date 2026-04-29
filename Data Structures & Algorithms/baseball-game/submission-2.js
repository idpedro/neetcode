class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const points = []
        const actions = {
            "+":()=>{
                let v2 = points.pop()
                let v1 = points.pop()
                let point = v1+v2
                points.push(v1)
                points.push(v2)
                points.push(point)

            },
            "C":()=>{
                points.pop()
            },
            "D":()=>{
                let lastPoint = points.pop()
                let newPoint = lastPoint * 2
                points.push(lastPoint)
                points.push(newPoint)
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
