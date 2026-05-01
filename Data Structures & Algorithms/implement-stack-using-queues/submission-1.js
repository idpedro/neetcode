class MyStack {
    queue = null
    constructor() {
        this.queue = new Queue()
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if( this.queue.isEmpty()){
            this.queue.push(x)
            return 
        }
        const temp = new Queue()
        temp.push(x)
        while(!this.queue.isEmpty()){
             temp.push(this.queue.dequeue())
        }
        this.queue = temp
    }

    /**
     * @return {number}
     */
    pop() {
        console.log(this.queue.front())
        const data = this.queue.dequeue()
        console.log(this.queue.front())
        return data
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
        return this.queue.isEmpty()
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
