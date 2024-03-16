class RecentCounter {
    data: Deque;
    k: number;
    calls: number
    constructor() {
        this.data = new Deque();
        this.k = 3000
        this.calls = 0;
    }

    ping(t: number): number {
        this.calls += 1;
        ((! this.data || this.data[-1][0]) > t) ? this.data.addFront([t, 1]) : this.data[-1][0] += 1;

        while (this.data[0][0] < t - this.k)
            this.calls -= this.data.removeFront()[1];
        return this.calls;
    }
}


class Deque<T> {
    deque: T[];

    constructor() {
        this.deque = [];
    }

    addFront(element: T) {
        this.deque.unshift(element);
    }

    addRear(element: T) {
        this.deque.push(element);
    }

    removeFront(): T | null {
        if (!this.isEmpty()) {
            return this.deque.shift() || null;
        }
        return null;
    }

    removeRear(): T | null {
        if (!this.isEmpty()) {
            return this.deque.pop() || null;
        }
        return null;
    }

    getFront(): T | null {
        if (!this.isEmpty()) {
            return this.deque[0];
        }
        return null;
    }

    getRear(): T | null {
        if (!this.isEmpty()) {
            return this.deque[this.size() - 1];
        }
        return null;
    }

    isEmpty(): boolean {
        return this.deque.length === 0;
    }

    size(): number {
        return this.deque.length;
    }
}

function numSubarraysWithSum(nums: number[], goal: number): number {
    let count: object = { 0: 1 }
    let cur_sum: number = 0
    let total_sub: number = 0
    for (const num of nums){
        cur_sum += num
        if (count.hasOwnProperty(cur_sum - goal))
            total_sub += count[cur_sum - goal]
        count[cur_sum] =  count[cur_sum] ? count[cur_sum] + 1 : 1
    }
    return total_sub
};


function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    let left: Array<number> = Array(n).fill(1);
    let right: Array<number> = Array(n).fill(1);
    let res: Array<number> = Array(n).fill(1)

    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    };

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        res[i] = left[i] * right[i];
    }

    return res;
};

function findMaxLength(nums:  Array<number>): number {
    const N = nums.length;
    
    let first: object  = {}
    
    let current: number = 0
    let longest: number = 0
    first[current] = 0

    for (let i = 0; i < N; i++) {
        current += nums[i] ? 1 : -1
        if (first.hasOwnProperty(current))
            longest = Math.max(longest, i - first[current] + 1)
        else
            first[current] = i + 1
    }

    return longest
}
