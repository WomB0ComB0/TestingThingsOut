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


function minimizeStringValue(s: string): string {
    let t0 = new Date().getTime();
    let cache: { [key: string]: string} = {}
    let f: { [key: string]: number } = {};
    if (cache[s]) return cache[s]
    for (let c of s) {
        if (c !== '?') {
            if (f[c]) {
                f[c]++;
            } else {
                f[c] = 1;
            }
        }
    }

    let h: [number, string][] = [];
    for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
        let char = String.fromCharCode(c);
        h.push([f[char] || 0, char]);
    }

    h.sort((a, b) => a[0] - b[0] || a[1].localeCompare(b[1]));

    let q: string[] = [];
    let ans: string[] = [];

    for (let c of s) {
        if (c === '?') {
            let [count, now] = h.shift();
            q.push(now);
            h.push([count + 1, now]);
            h.sort((a, b) => a[0] - b[0] || a[1].localeCompare(b[1]));
        }
    }

    q.sort();

    for (let c of s) {
        if (c === '?') {
            ans.push(q.shift());
        } else {
            ans.push(c);
        }
    }

    cache[s] = ans.join("");

    let t1 = new Date().getTime();
    console.log(`Execution time: ${t1 - t0} milliseconds.`);
    return cache[s];
}

function maximum69Number (num: number): number {
    const s = num.toString()
    let i = -1
    for (let j = 0; j < s.length; j++){
        if (s[j] == "6") { i = j
            break
        }
    }
    if (i == -1) { return num }
    else { 
        return parseInt(s.substring(0, i) + "9" + s.substring(i+1))
    }
};

function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) return 0;
    
    points.sort((a, b) => a[1] - b[1]);

    let total: number = 0;
    let end_point: number = Number.NEGATIVE_INFINITY;

    for (let i of points) {
        if (i[0] > end_point) {
            total += 1 
            end_point = i[1];
        }
    }

    return total
};

function findMinArrowShots(points: number[][]): number {
    const N = points.length

    const START = 0
    const END = 1

    let events: Array<[number, number, number]> = []
    for (let index = 0; index < N; index++) {
        let [s, e] = points[index]
        events.push([s, START, index])
        events.push([e, END, index])
    }
    events.sort((a, b) => a[0] - b[0])

    let bursted: boolean[] = Array(N).fill(false)
    let current: Set<number> = new Set()
    let shots: number = 0

    for (let [x, t, index] of events) {
        if (t === START) {
            current.add(index)
        } else {
            if (bursted[index]) {
                continue
            }
            shots += 1
            for (let c of current) {
                bursted[c] = true
            }
        }
    }

    return shots

}
