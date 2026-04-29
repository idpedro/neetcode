class MinStack {
    constructor() {
        this.stack = new Array()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        let temp = []
        let min = this.top()
        while(this.stack.length){
            let v = this.stack.pop()
            min = Math.min(min,v)
            temp.push(v)
        }
        while(temp.length){
            let v = temp.pop()
            this.stack.push(v)
        }
        return min

    }
}
