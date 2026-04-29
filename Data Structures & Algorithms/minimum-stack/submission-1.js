class MinStack {
    constructor() {
        this.stack = new Array()
        this.minStack = new Array()

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        let min = Math.min(val,this.minStack[this.minStack.length -1] ?? val)
        this.minStack.push(min)
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
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
        return this.minStack[this.minStack.length -1]
    }
}
