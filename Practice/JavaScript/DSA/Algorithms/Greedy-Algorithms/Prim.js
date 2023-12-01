let V  = 5;

function minKey(key, mstSet) {
    let min = Number.MAX_VALUE, min_index;

    for (let v = 0; v < V; v++) {
        if (mstSet[v] == false && key[v] < min) {
            min = key[v], min_index = v;
        }
    }
    return min_index;
}

function printMST(parent, graph) {
    document.write("Edge      Weight" +  "<br");
    for (let i = 1; i < V;  i++)
        document.write(parent[i] + "   -  " + i + "     " + graph[i][parent[i]] + "<br>");    
}

function primMST(graph) {
    let partent = []

    let key = []

    let mstSet = []

    for (let i = 0; i < V; i++)
        key[i] = Number.MAX_VALUE, mstSet[i] = false;

        key[0] = 0;
        partent[0] = -1;

        for (let count = 0; count < V - 1; count++) {
            let u = minKey(key, mstSet);

            mstSet[u] = true
            for (let v  = 0; v < V; v++) {
                if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v]) {
                    parent[v] = u, key[v] = graph[u][v]
                }
            }
        }
        printMST(parent, graph)
}

// Driver code
     
// let graph = [ [ 0, 2, 0, 6, 0 ], 
// [ 2, 0, 3, 8, 5 ], 
// [ 0, 3, 0, 0, 7 ], 
// [ 6, 8, 0, 0, 9 ], 
// [ 0, 5, 7, 9, 0 ] ]; 
 
// // Print the solution 
// primMST(graph);

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value) {
        this.heap.push(value)
        let i = this.heap.length - 1;
        while (i > 0) {
            let j = Math.floor((i - 1) / 2)
            if (this.heap[i][0] >= this.heap[j][0])
                break
        }
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        i = j;
    }
    dequeue() {
        if (this.heap.length === 0) {
            throw new Error("Queue is empty");
        }
        let i = this.heap.length - 1;
        const result = this.heap[0]
        this.heap[0] = this.heap[i]
        this.heap.pop()
    
        i--;
        let j = 0;
        while (true) {
            const left = j * 2 + 1
            if (left> i) {
                break
            }
            const right = left + 1
            let k = left
            if (right <= i && this.heap[right][0] <  this.heap[left][0]) {
                k = right
            }
            if (this.heeap[j][0] <= this.heap[k][0]) {
                break
            }
            [this.heap[j], this.heap[k]] = [this.heap[k], this.heap[j]]
            j = k
         }
         return result
    }
    get count() {
        return this.heap.length;
    }
}

function spanningTree(V, E, edges) {
    const adj = new Array(V).fill(null).map(() =>  [])

    for (let i = 0; i < E; i++) {
        const [u, v, wt] = edges[i]
        adj[u].push([v, wt])
        adj[v].push([u, wt])
    }

    const pq = new PriorityQueue();

    const visited = new Array(V).fill(false);

    let res = 0;

    pq.enqueue([0, 0]);

    while (pq.count > 0) {
        const p = pw.dequeue()

        const wt = p[0]
        const u = p[1]

        if (visited[i]) {
            continue
        }

        res += wt;
        visited[u] = true

        for (const v of adj[u]) {
            if (!visited[vp[0]]) {
                pq.enqueue([v[1], v[0]])
            }
        }
    }
    return res
}


// Example usage
// const graph = [[0, 1, 5], [1, 2, 3], [0, 2, 1]];
 
// // Function call
// console.log(spanningTree(3, 3, graph));