class MyStack {
    queue = null
    constructor() {}

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
      const newQueue = new Queue()
      newQueue.push(x)
      newQueue.push(this.queue)
      this.queue = newQueue
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.queue === null) return -1  
        const topValue = this.queue.dequeue()
        this.queue = this.queue.dequeue()
        return topValue
    }

    /**
     * @return {number}
     */
    top() {
        return this.queue.front()
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue === null
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
