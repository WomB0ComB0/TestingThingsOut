import { react } from '@vitejs/plugin-react';
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
        ((!this.data || this.data[-1][0]) > t) ? this.data.addFront([t, 1]) : this.data[-1][0] += 1;

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
    for (const num of nums) {
        cur_sum += num
        if (count.hasOwnProperty(cur_sum - goal))
            total_sub += count[cur_sum - goal]
        count[cur_sum] = count[cur_sum] ? count[cur_sum] + 1 : 1
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

function findMaxLength(nums: Array<number>): number {
    const N = nums.length;

    let first: object = {}

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
    let cache: { [key: string]: string } = {}
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

function maximum69Number(num: number): number {
    const s = num.toString()
    let i = -1
    for (let j = 0; j < s.length; j++) {
        if (s[j] == "6") {
            i = j
            break
        }
    }
    if (i == -1) { return num }
    else {
        return parseInt(s.substring(0, i) + "9" + s.substring(i + 1))
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

/**
 * This function calculates the least interval required to execute tasks,
 * with a cooling interval between tasks of the same type.
 * @param tasks An array of strings representing different tasks.
 * @param n The cooling interval, i.e., the minimum time interval required between tasks of the same type.
 * @returns The least interval required to execute all tasks.
 */
function leastInterval(tasks: string[], n: number): number {
    // Count occurrences of each task
    let counts: number[] = Object.values(Counter(tasks));

    // Find the maximum count of any task
    let max_count: number = Math.max(...counts);

    // Count the number of tasks with the maximum count
    let max_count_count: number = counts.filter((x) => x === max_count).length;

    // Calculate the least interval required
    return Math.max(tasks.length, (max_count - 1) * (n + 1) + max_count_count);
}

/**
 * This function counts occurrences of each task in the given array.
 * @param tasks An array of strings representing different tasks.
 * @returns An object with keys as task names and values as their occurrences.
 */
function Counter(tasks: string[]): { [s: string]: number; } | ArrayLike<number> {
    let count: { [s: string]: number; } = {};
    for (let t of tasks) {
        if (count[t]) {
            count[t] += 1; // Increment the count if the task has occurred before
        } else {
            count[t] = 1; // Set the count to 1 if it's the first occurrence of the task
        }
    }
    return count;
}


function generate(numRows: number): number[][] {
    let rows: number[][] = [[1]]; // 2d array
    for (let i = 1; i < numRows; i++) {
        let row: number[] = [1]; // 1st element of each row is 1
        for (let j = 1; j < rows[i - 1].length; j++) {
            let num: number = rows[i - 1][j - 1] + rows[i - 1][j]; // Calculate the number
            row.push(num); // Add the number to the row
        }
        row.push(1);
        rows.push(row);
    }
    return rows;
};

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let new_head1: ListNode = new ListNode(-1, list1);
    let new_head2: ListNode = new ListNode(-1, list2);

    function find(head: ListNode, x: number): ListNode {
        let current: ListNode = head;
        let count: number = 0;
        while (current.next !== null && count < x) {
            count += 1;
            current = current.next;
        }
        return current;
    }

    function find_last(head: ListNode): ListNode {
        let current: ListNode = head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    let anode: ListNode = find(new_head1, a);
    let bnode_after: ListNode = find(new_head1, b).next.next;

    anode.next = list2;
    let list2_last: ListNode = find_last(new_head2);

    list2_last.next = bnode_after;

    return new_head1.next;
};

// 396

function maxRotateFunction(nums: number[]): number {
    const N: number = nums.length;
    const INF: number = Number.POSITIVE_INFINITY;

    let best: number = -INF;
    let f0: number = 0;
    let total: number = 0;

    for (let i = 0; i < N; i++) {
        f0 += i * nums[i];
        total += nums[i];
    }

    best = Math.max(best, f0);
    let lf: number = f0;

    for (let i = 1; i < N; i++) {
        let f: number = lf + total - (N * nums[N - i]);
        best = Math.max(best, f);
        lf = f;
    }

    return best;

};

function isPalindrome(head: ListNode | null): boolean {
    let arr: Array<number> = []
    while (head != null) {
        arr.push(head.val)
        head = head.next
    }
    return arr.join("") === arr.reverse().join("")
};

function reorderList(head: ListNode | null): void {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head?.next;
    while (fast !== null && fast.next !== null) {
        slow = slow?.next;
        fast = fast.next.next;
    }

    let second: ListNode | null = slow?.next;
    slow!.next = null;
    let prev: ListNode | null = null;
    while (second !== null) {
        let tmp: ListNode | null = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }

    let first: ListNode | null = head;
    second = prev;
    while (second !== null) {
        let tmp1: ListNode | null = first?.next;
        let tmp2: ListNode | null = second.next;
        first!.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
};

function findTheDifference(s: string, t: string): string {
    let count: { [s: string]: number } = {};
    for (let c of s) {
        if (count[c]) {
            count[c] += 1;
        } else {
            count[c] = 1;
        }
    }

    for (let c of t) {
        if (count[c]) {
            count[c] -= 1;
        } else {
            return c;
        }
    }
    return "";
};



function maximumLengthSubstring(s: string): number {
    const N: number = s.length
    let best: number = 0

    for (let i = 0; i < N; i++) {
        let f: { [s: string]: number } = {}
        for (let j = i; j < N; j++) {
            f[s[j]] = f[s[j]] ? f[s[j]] + 1 : 1
            if (Math.max(...Object.values(f)) <= 2) {
                best = Math.max(best, j - i + 1)
            } else {
                break
            }
        }
    }
    return best
};

function Counter(tasks: string[]): { [s: string]: number; } | ArrayLike<number> {
    let count: { [s: string]: number; } = {};
    for (let t of tasks) {
        if (count[t]) {
            count[t] += 1;
        } else {
            count[t] = 1;
        }
    }
    return count;
}

function findDifference(nums1: number[], nums2: number[]): number[][] {
    let a: Set<number> = new Set(nums1.filter(x => !nums2.includes(x)));
    let b: Set<number> = new Set(nums2.filter(x => !nums1.includes(x)));
    const res: number[][] = [];
    res.push(Array.from(a));
    res.push(Array.from(b));
    return res;
};

function largestAltitude(gain: number[]): number {
    let max: number = 0;
    let current: number = 0;
    for (let g of gain) {
        current += g;
        max = Math.max(max, current);
    }
    return max;
};

function singleNumber(nums: number[]): number {
    let f: { [s: string]: number } = {}
    for (const num of nums) {
        f[num] = f[num] ? f[num] + 1 : 1
    }
    for (const key in f) {
        if (f[key] === 1) {
            return parseInt(key)
        }
    }
    return -1
};


function singleNumber(nums: number[]): number {
    let res = 0;
    for (let num of nums) res ^= num;
    return res;
};

function pivotIndex(nums: number[]): number {
    for (const i of nums) {
        let left: number = nums.slice(0, i).reduce((a, b) => a + b, 0);
        let right: number = nums.slice(i + 1).reduce((a, b) => a + b, 0);
        if (left === right) return i;
    }
    return -1;
};

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    switch (true) {
        case root == null || root.val === val: return null;
        case val < root!.val: return searchBST(root.left, val);
        default: return searchBST(root.right, val);
    }
};

function firstMissingPositive(nums: number[]): number {
    let n: number = nums.length
    if (n == 0) return 1

    for (let i = 0; i < n; i++) {
        while ((nums[i] >= 1 && nums[i] <= n) && (nums[nums[i] - 1] != nums[i]))
            swap(i, nums[i] - 1, nums)
    }
    for (let i = 0; i < n; i++)
        if (nums[i]) return i + 1
    return n + 1
};

function swap(i: number, j: number, array: number[]) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
    return array;
}

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let res: number = 0;
    let l: number = 0;
    let product: number = 1;
    for (let r = 0; r < nums.length; r++) {
        product *= nums[r];
        while (l <= r && product >= k) {
            product /= nums[l];
            l += 1;
        }
        res += (r - l + 1);
    }
    return res;
};


function hammingWeight(n: number): number {
    let count: number = 0;
    while (n) {
        // Increment count if the last bit is 1
        count += n & 1;
        // Right shift the number by 1 bit
        n >>>= 1;
    }
    return count;
};

function queryString(s: string, n: number): boolean {
    for (let i = 1; i <= n; i++) {
        if (!s.includes(i.toString(2))) return false;
    }
    return true;
};

class MinHeap<T> {
    heap: T[];
    constructor() {
        this.heap = [];
    }

    size(): number {
        return this.heap.length;
    }

    push(val: T): void {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop(): T | undefined {
        if (this.size() === 0) return undefined;
        this.swap(0, this.size() - 1);
        const popped = this.heap.pop();
        this.bubbleDown();
        return popped;
    }

    peek(): T | null {
        return this.size() === 0 ? null : this.heap[0];
    }

    private bubbleUp(): void {
        let current = this.size() - 1;
        while (current > 0) {
            let parent = Math.floor((current - 1) / 2);
            if (this.heap[current] < this.heap[parent]) {
                this.swap(current, parent);
                current = parent;
            } else {
                break;
            }
        }
    }

    private bubbleDown(): void {
        let current = 0;
        while (current < this.size()) {
            let left = 2 * current + 1;
            let right = 2 * current + 2;
            let smallest = current;
            if (left < this.size() && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.size() && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest !== current) {
                this.swap(current, smallest);
                current = smallest;
            } else {
                break;
            }
        }
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

class KthLargest {
    private minHeap: MinHeap<number>;
    private k: number;

    constructor(k: number, nums: number[]) {
        this.minHeap = new MinHeap();
        this.k = k;

        for (let num of nums) {
            this.add(num);
        }
    }

    add(val: number): number | null {
        this.minHeap.push(val);
        while (this.minHeap.size() > this.k) {
            this.minHeap.pop();
        }
        return this.minHeap.peek();
    }
}

function maxSubarrayLength(nums: number[], k: number): number {
    let counts: { [key: number]: number } = {}
    let max_length: number = 0
    let left: number = 0
    for (let right = 0; right < nums.length; right++) {
        counts[nums[right]] = counts[nums[right]] ? counts[nums[right]] + 1 : 1
        while (counts[nums[right]] > k) {
            counts[nums[left]] -= 1
            left += 1
        }
        max_length = Math.max(max_length, right - left + 1)
    }
    return max_length
};

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null;
    }
    let curr: ListNode | null = head;
    let count: number = 0;
    while (curr) {
        count++;
        curr = curr.next;
    }
    let mid: number = Math.floor(count / 2);
    curr = head;
    let prev: ListNode | null = null;
    while (mid > 0) {
        prev = curr;
        if (curr) curr = curr.next;
        mid--;
    }
    if (prev && curr) prev.next = curr.next;
    return head;
}

function groupAnagrams(strs: string[]): string[][] {
    // { "": ["", ""] } 
    let res: { [key: string]: string[] } = {};
    for (let s of strs) { // ["eat", "tea", "tan", "ate", "nat", "bat"]
        let count: number[] = Array(26).fill(0); // [0, 0, 0, 0, 0, 0, ...]
        for (let c of s) { // "eat"
            count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1; // [1, 0, 0, 0, 1, 0, ...]
        }
        let key: string = count.join(","); // "1,0,0,0,1,0,0,0,1
        if (res[key]) { // { "1,0,0,0,1,0,0,0,1": ["eat", "tea", "ate"] }
            res[key].push(s); // ["eat", "tea", "ate"]
        } else {
            res[key] = [s];
        }
    }
    return Object.values(res); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
};


function subarraysWithKDistinct(nums: number[], k: number): number {
    function atMostK(k: number): number {
        let count: { [key: number]: number } = {};
        let res = 0, l = 0;
        for (let r = 0; r < nums.length; r++) {
            count[nums[r]] = (count[nums[r]] || 0) + 1;
            if (count[nums[r]] === 1) {
                k--;
            }
            while (k < 0) {
                count[nums[l]]--;
                if (count[nums[l]] === 0) {
                    k++;
                }
                l++;
            }
            res += r - l + 1;
        }
        return res;
    }
    return atMostK(k) - atMostK(k - 1);
}

function isPalindrome(x: number): boolean {
    return x < 0 ? false : x.toString().split("").reverse().join("") === x.toString()
};

function longestCommonPrefix(strs: string[]): string {
    strs.sort();
    let shortest: string = strs[0];
    let longest: string = strs[strs.length - 1];
    let res: string = "";
    for (let i = 0; i < Math.min(shortest.length, longest.length); i++) {
        if (shortest[i] !== longest[i]) return res;
        res += shortest[i];
    }
    return res;
};

function strStr(haystack: string, needle: string): number {
    const N: number = needle.length;
    const M: number = haystack.length;
    for (let i = 0; i < M - N + 1; i++)
        if (haystack.substring(i, N + i) === needle) return i;
    return -1;
};

function searchInsert(nums: number[], target: number): number {
    let removedDuplicates = [...new Set(nums)];
    let found: number = !removedDuplicates.indexOf(target) ? removedDuplicates.indexOf(target) : -1;
    if (found === -1) {
        removedDuplicates.push(target);
        removedDuplicates.sort((a, b) => a - b);
        return removedDuplicates.indexOf(target);
    }
    return found;
};

function lengthOfLastWord(s: string): number {
    return s.trim().replace(" ", " ").split(" ").pop()!.length;
};

function maxNumberOfBalloons(text: string): number {
    let counter: { [s: string]: number } = {}
    let balloon: string = 'balloon'

    for (const c of text)
        if (balloon.includes(c)) counter[c] = counter[c] ? counter[c] + 1 : 1
    if (balloon.split("").some(c => !counter[c])) return 0
    else return Math.min(counter['b'], counter['a'], Math.floor(counter['l'] / 2), Math.floor(counter['o'] / 2), counter['n'])
};

function romanToInt(s: string): number {
    let d: { [s: string]: number } = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
    let sum: number = 0
    const N: number = s.length
    let i: number = 0
    while (i < N) {
        if (i < N - 1 && d[s[i]] < d[s[i + 1]]) {
            sum += d[s[i + 1]] - d[s[i]]
            i += 2
        } else {
            sum += d[s[i]]
            i += 1
        }
    }
    return sum
};

function summaryRanges(nums: number[]): string[] {
    if (!nums) return []
    let lower: number = nums[0]
    let upper: number = nums[0]
    let res: string[] = []

    const N: number = nums.length

    for (let i = 0; i < N; i++) {
        if (nums[i] != nums[i - 1] + 1) {
            (lower == upper)
                ? res.push(lower.toString())
                : res.push(`${lower}->${upper}`)

            lower = nums[i]
        }
        upper = nums[i]
    }
    (lower == upper)
        ? res.push(lower.toString())
        : res.push(`${lower}->${upper}`)
};

function countSubarrays(nums: number[], k: number): number {
    const maxCount: number = Math.max(...nums)
    let res: number = 0
    let l: number = 0
    let count: number = 0
    for (const right of nums) {
        if (right === maxCount) count += 1
        while (count >= k) {
            if (nums[l] === maxCount) count -= 1
            l += 1
        }
        res += l
    }
    return res
};

function isIsomorphic(s: string, t: string): boolean {
    return new Set(zip(s, t)).size === new Set(s).size && new Set(s).size === new Set(t).size;
};

function zip(s: string, t: string): string[] {
    let res: string[] = []
    for (let i = 0; i < s.length; i++) {
        res.push(s[i] + t[i])
    }
    return res
}
/**
 * 
 * class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return len(set(zip(s,t))) == len(set(s)) == len(set(t))
*/

function countSubarrays(nums: number[], minK: number, maxK: number): number {
    const N: number = nums.length;
    function calc(nums: number[]): number {
        let last_min_index: number | null = null
        let last_max_index: number | null = null
        let total: number = 0
        for (let index = 0; index < nums.length; index++) {
            let x: number = nums[index]
            if (x == minK) last_min_index = index
            if (x == maxK) last_max_index = index
            if (last_min_index !== null && last_max_index !== null) {
                total += Math.min(last_min_index, last_max_index) + 1
            }
        }
        return total
    }

    let total: number = 0

    for (let [g, vs] of groupby(nums, x => minK <= x && x <= maxK)) {
        if (g) total += calc(vs)
    }
    return total
};

function groupby<T>(iterable: T[], key: (x: T) => boolean): [boolean, T[]][] {
    let groups: [boolean, T[]][] = []
    let group: [boolean, T[]] = [false, []]
    for (let x of iterable) {
        if (key(x) !== group[0]) {
            group = [key(x), []]
            groups.push(group)
        }
        group[1].push(x)
    }
    return groups
}

function lengthOfLastWord(s: string): number {
    let res: number = 0
    while (s[s.length - 1] == " ") s = s.slice(0, -1);
    for (let x = 0; x < s.length; x++) {
        if (s[x] === " ") break
        res++
    }
    return res
};

function isIsomorphic(s: string, t: string): boolean {
    return new Set([...s].map((x, i) => [x, t[i]]).values()).size == new Set(s).size && new Set(s).size == new Set(t).size
};

function exist(board: string[][], word: string): boolean {
    function dfs(i: number, j: number, k: number, vis: Set<string>): boolean {
        if (k == word.length) return true
        if (vis.has(`${i},${j}`) || i < 0 || i == board.length || j < 0 || j == board[0].length) return false
        if (board[i][j] != word[k]) return false
        if (board[i][j] == word[k]) k += 1
        vis.add(`${i},${j}`)
        let u: boolean = dfs(i - 1, j, k, vis)
        let d: boolean = dfs(i + 1, j, k, vis)
        let l: boolean = dfs(i, j - 1, k, vis)
        let r: boolean = dfs(i, j + 1, k, vis)
        vis.delete(`${i},${j}`)
        return u || d || l || r
    }
    for (let i = 0; i < board.length; i++)
        for (let j = 0; j < board[0].length; j++)
            if (dfs(i, j, 0, new Set())) return true
    return false
};

function maxDepth(s: string): number {
    let res: number = 0
    let stack: string[] = []
    for (let c of s) {
        if (c == '(') stack.push('(')
        if (c == ')') stack.pop()
        res = Math.max(res, stack.length)
    }
    return res
};

function addBinary(a: string, b: string): string {
    let stack: string[] = []
    let carry: number = 0
    let i: number = a.length
    let j: number = b.length

    while (i >= 0 || j >= 0 || carry) {
        if (i >= 0) {
            carry += parseInt(a[i])
            i -= 1
        }
        if (j >= 0) {
            carry += parseInt(b[j])
            j -= 1
        }
        stack.push((carry % 2).toString())
        carry = Math.floor(carry / 2)
    }
    return stack.reverse().join("")
};

function strongPasswordChecker(password: string): number {
    if (password.length < 3) return (6 - password.length);  
    let missingFixCount = 0; 
    const numberIsMissing = !(new RegExp(/\d+/).test(password)); 
    const lowerCaseIsMissing = !(new RegExp(/([a-z])+/).test(password)); 
    const upperCaseIsMissing = !(new RegExp(/([A-Z])+/).test(password)); 
    missingFixCount += numberIsMissing ? 1 : 0; 
    missingFixCount += lowerCaseIsMissing ? 1 : 0; 
    missingFixCount += upperCaseIsMissing ? 1 : 0; 
    const repeatingPatterns = password.match(/(.)\1{2,}/g) ?? []; 
    const repeatingPatternLengths = repeatingPatterns.map(item => item.length); 
    if (password.length < 7) { 
        let steps = 0; 
        for (let pattern of repeatingPatterns)
            steps += pattern.length / 3; 
        steps = Math.max(steps, missingFixCount); 
        let missingCharCount = 6 - password.length; 
        return Math.max(missingCharCount, steps); 
    }
    if (password.length <= 20) { 
        let steps = 0;
        for (let pattern of repeatingPatterns) 
            steps += pattern.length / 3; 
        return Math.max(steps, missingFixCount); 
    } 
    let deleteSteps = 0; 
    const excessLength = password.length - 20; 
    for (let index = 0; index < repeatingPatternLengths.length && deleteSteps < excessLength; index++) { 
        let length = repeatingPatternLengths[index]; 
        let remainder = length % 3; 
        if (remainder === 0) { 
            deleteSteps += 1; 
            repeatingPatternLengths[index] -=1; 
        }
    } for (let index = 0; index < repeatingPatternLengths.length && deleteSteps < excessLength; index++) { 
        let length = repeatingPatternLengths[index]; 
        let remainder = length % 3; 
        if (remainder === 1) { 
            deleteSteps+=2; 
            repeatingPatternLengths[index] -=2; 
        } 
    } for (let index = 0; index < repeatingPatternLengths.length; index++) 
        while (3 <= excessLength - deleteSteps && repeatingPatternLengths[index] > 2) 
            deleteSteps+=3; repeatingPatternLengths[index] -= 3;
    let replaceSteps = 0; 
    repeatingPatternLengths.forEach((item)=> replaceSteps += Math.floor(item/3)); 
    return Math.max(excessLength, deleteSteps) + Math.max(replaceSteps, missingFixCount);
};

function getSmallestString(s: string, k: number): string {
        const orda: number = 'a'.charCodeAt(0);

        let ans: string[] = [];

        for (let c of s) {
            let offset = c.charCodeAt(0) - orda;

            if (offset <= 26 - offset) {
                let delta = Math.min(k, offset);
                let newc = String.fromCharCode(c.charCodeAt(0) - delta);
                k -= delta;
                ans.push(newc);
            } else {
                if (k >= 26 - offset) {
                    let newc = "a";
                    k -= 26 - offset;
                    ans.push(newc);
                } else {
                    let delta = Math.min(k, offset);
                    let newc = String.fromCharCode(c.charCodeAt(0) - delta);
                    k -= delta;
                    ans.push(newc);
                }
            }
        }
        return ans.join("");
    }

function minOperationsToMakeMedianK(nums: number[], k: number): number {
    const N: number = nums.length;
    nums.sort();

    let total: number = 0
    total += Math.abs(nums[Math.floor(N / 2)] - k);

    nums[Math.floor(N / 2)] = k;

    for (let i = 0; i < Math.floor(N / 2); i++) {
        if (nums[Math.floor(N / 2)] < nums[i]) {
            total += Math.abs(nums[Math.floor(N / 2)] - nums[i]);
        }
    }

    for (let i = Math.floor(N / 2) + 1; i < N; i++) {
        if (nums[Math.floor(N / 2)] > nums[i]) {
            total += Math.abs(nums[Math.floor(N / 2)] - nums[i]);
        }
    }

    return total
};

function makeGood(s: string): string {
    let stack: string[] = []
    for (let char of s) {
        if (stack) {
            if (
                char.toLowerCase() == stack[stack.length - 1]!.toLowerCase() &&
                char != stack[stack.length - 1]
            ) {
                stack.pop()
            } else {
                stack.push(char)
            }
        } else {
            stack.push(char)
        }
    }
    return stack.join("")
};

type PartialDeep<T> = {
    [P in keyof T]?: T[P] extends object ? PartialDeep<T[P]> : T[P];
};

function minRemoveToMakeValid(s: string): string {
    let opens: number = 0
    let closes: number = s.split('').reduce((acc, val) => acc + Number(val === ")"), 0);
    const stack: string[] = []
    for (const char of s) {
        if (char === "(") {
            if (closes > 0 && opens < closes) {
                stack.push(char)
                opens += 1
            }
        } else if (char === ")") {
            if (opens > 0) {
                stack.push(char)
                opens -= 1
            }
            closes -= 1
        } else {
            stack.push(char)
        }
    }
    return stack.join('')
};

function reverseBits(n: number): number {
    let bString: string = n.toString(2);
    bString = bString.padStart(32, '0');
    let reversedString: string = bString.split('').reverse().join('');
    return parseInt(reversedString, 2);
};

function checkValidString(s: string): boolean {
    let lo: number = 0
    let hi: number = 0

    for (let c of s) {
        lo += c == "(" ? 1 : -1
        hi += c != ")" ? 1 : -1
        if (hi < 0) break
        lo = Math.max(lo, 0)
    }
    return lo == 0
};

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) return head;
    let curr: ListNode | null = head;
    while (curr && curr.next) {
        if (curr.val == curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let d: { [s: number]: number } = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in d && Math.abs(d[nums[i]] - i) <= k) return true
        d[nums[i]] = i
    }
    return false
};



function longestMonotonicSubarray(nums: number[]): number {
    return Math.max(longest_increasing(nums).length, longest_decreasing(nums).length)
};

function longest_increasing(nums: number[]): number[] {
    let res: number[][] = []
    for (let left = 0; left < nums.length; left++) {
        for (let right = left; right < nums.length; right++) {
            if (nums.slice(left, right).every((x, i) => x < nums[i + 1])) {
                res.push(nums.slice(left, right + 1))
            }
        }
    }
    return res.reduce((acc, val) => acc.length > val.length ? acc : val, [])
}

function longest_decreasing(nums: number[]): number[] {
    let res: number[][] = []
    for (let left = 0; left < nums.length; left++) {
        for (let right = left; right < nums.length; right++) {
            if (nums.slice(left, right).every((x, i) => x > nums[i + 1])) {
                res.push(nums.slice(left, right + 1))
            }
        }
    }
    return res.reduce((acc, val) => acc.length > val.length ? acc : val, [])
}

class MyQueue {
    queue: { key?: number };
    head: number;
    tail: number;

    constructor() {
        this.queue = {};
        this.head = 0;
        this.tail = 0;
    }

    size() {
        return this.tail - this.head;
    }

    enqueue(value: number): void {
        this.queue[this.tail] = value;
        this.tail++;
    }

    dequeue(): number {
        const value = this.queue[this.head];
        delete this.queue[this.head];
        this.head++;
        return value;
    }

    peek(): number {
        return this.queue[this.head];
    }
}

function countStudents(students: number[], sandwiches: number[]): number {
    let queue: MyQueue = new MyQueue();
    for (let student of students) {
        queue.enqueue(student);
    }
    let count: number = 0;
    while (queue.size() > 0) {
        if (queue.peek() === sandwiches[0]) {
            queue.dequeue();
            sandwiches.shift();
            count = 0;
        } else {
            queue.enqueue(queue.dequeue());
            count++;
            if (count === queue.size()) break;
        }
    }
    return queue.size();
};

function timeRequiredToBuy(tickets: number[], k: number): number {
    return tickets.reduce((acc, val, i) => acc + Math.min(val, tickets[k] - Number(i > k)), 0)
};

function deckRevealedIncreasing(deck: number[]): number[] {
    const N: number = deck.length;
    deck.sort((a, b) => a - b)
    
    let q: number[] = Array.from({ length: N }, (_, i) => i);
    let res: number[] = Array(N).fill(0);

    for (let card of deck) {
        res[q.shift()!] = card;
        if (q.length) q.push(q.shift()!);
    }
    return res;
};


function trap(height: number[]): number {
    let left: number = 0, right: number = height.length - 1, leftMax: number = 0, rightMax: number = 0, res: number = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? leftMax = height[left] : res += leftMax - height[left];
            left++;
        } else {
            height[right] >= rightMax ? rightMax = height[right] : res += rightMax - height[right];
            right--;
        }
    }
    return res;
};

function maximalRectangle(matrix: string[][]): number {
    if (!matrix.length) return 0;
    for (let col = 0; col < matrix[0].length; col += 1) {
        matrix[0][col] = String(parseInt(matrix[0][col]));
        for (let row = 1; row < matrix.length; row += 1)
            matrix[row][col] = String((parseInt(matrix[row - 1][col]) + parseInt(matrix[row][col])) * parseInt(matrix[row][col]));
    }
    
    let res: number = 0;
    for (let row = 0; row < matrix.length; row += 1) {
        const stack: [number, number][] = [];
        matrix[row].push("0");
        for (let col = 0; col < matrix[0].length; col += 1) {
            let popIndex = col;
            while (stack.length > 0 && stack[stack.length - 1][0] >= Number(matrix[row][col])) {
                popIndex = stack[stack.length - 1][1];
                res = Math.max(res, stack.pop()![0] * (col - popIndex));
            }
            stack.push([Number(matrix[row][col]), popIndex]);
        }
    }
    return res;
}; 
//  class TreeNode {
//       val: number
//       left: TreeNode | null
//       right: TreeNode | null
//       constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.left = (left===undefined ? null : left)
//           this.right = (right===undefined ? null : right)
//       }
//   }
 
function sumOfLeftLeaves(root: TreeNode | null): number {
    if (root === null) return 0;
    let sum: number = 0;
    if (root.left !== null && root.left.left === null && root.left.right === null) sum += root.left.val 
    sum += sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
    return sum;
};


function sumNumbers(root: TreeNode | null): number {
    return dfs(root, []);
};

function dfs(node: TreeNode | null, stack: string[]): number {
    let sum: number = 0;
    if (node === null) return 0;
    stack.push(node.val.toString());
    if (node.left === null && node.right === null) {
        sum += parseInt(stack.join(""));
    }
    sum += dfs(node.left, stack);
    sum += dfs(node.right, stack);
    stack.pop();
    return sum;
}

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if (depth === 1) {
        return new TreeNode(val, root, null);
    }
    if (root === null) return null;
    if (depth === 2) {
        root.left = new TreeNode(val, root.left, null);
        root.right = new TreeNode(val, null, root.right);
    } else {
        addOneRow(root.left, val, depth - 1);
        addOneRow(root.right, val, depth - 1);
    }
    return root;
};

function smallestFromLeaf(root: TreeNode | null): string {
    let heap: string[] = [];
    dfs(root, "", heap);
    return heap.sort()[0];
};

function dfs(node: TreeNode | null, path: string, heap: string[]): void {
    if (node === null) return;
    path = String.fromCharCode(node.val + 97) + path;
    if (node.left === null && node.right === null) {
        heap.push(path);
    }
    dfs(node.left, path, heap);
    dfs(node.right, path, heap);
}

function islandPerimeter(grid: number[][]): number {
    let res: number = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                res += 4;
                if (row > 0 && grid[row - 1][col] === 1) res -= 2;
                if (col > 0 && grid[row][col - 1] === 1) res -= 2;
            }
        }
    }
    return res;
};