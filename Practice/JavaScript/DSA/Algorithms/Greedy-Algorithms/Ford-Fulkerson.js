// Number of vertices in graph
let  V = 6;

// Returns true if there is a  apath from source
// ' s' to sink 't' in residual graph. Also fils parent[] to store the path

function bfs(rGraph, s, t, parent) {
    // Create a visited array and amrk all vertices as not visited
    let visited = new Array(V);
    for (let i = 0; i < V; i++)
        visited[i] = false;


    // Create a queue, enqueue source vertex and mark source vertex as visited
    let queue = [];
    queue.push(s)
    visited[s] = true;
    parent[s] = -1; 

    // Standard BFS Loop
    while (queue.length != 0) {
        let u = queue.shift();

        for (let v = 0; v < V; v++) {
            if (visited[v] == false && rGraph[u][v] > 0) {
                if (v == t) {
                    parent[v] = u;
                    return true;
                }
                queue.push(v);
                parent[v] = u;
                visited[v] = true;
            }
        }
    }
    return false;
}

function fordFulkerson(graph, s, t) {
    let u, v;

    // Create a residual graph and fill the residual graph with
    // given capacities in the original graph as residual capacities
    // in residual graph

    let rGraph = new Array(V);
    for (let i = 0; i < V; i++) {
        rGraph[i] = new Array(V);
        
        for (v = 0; v < V; v++)
            rGraph[u][v] = graph[u][v];
    }

    // This array is filled by BFS and to store path
    let parent = new Array(V);

    // There is no flow initially
    let max_flow = 0;

    // Augment the flow while tere is path from source to sink
    while (bfs(rGraph, s, t, parent)) {
        // Find minimum residual capacity of the edhes along the
        // path filled by BFS. Or we can say find the maximum flow
        // through the path found.
        let path_flow = Infinity;
        for (v = t; v != s; v = parent[v]) {
            u = parent[v];
            path_flow = Math.min(path_flow, rGraph[u][v]);
        }

        // update residual capacities of the edges and reverse edges
        // along the path
        for (v = t; v != s; v = parent[v]) {
            u = parent[v];
            rGraph[u][v] -= path_flow;
            rGraph[v][u] += path_flow;
        }

        // Add path flow to overall flow
        max_flow += path_flow;
    }
    return max_flow;
}

let graph = [ [ 0, 16, 13, 0, 0, 0 ], 
              [ 0, 0, 10, 12, 0, 0 ],
              [ 0, 4, 0, 0, 14, 0 ],  
              [ 0, 0, 9, 0, 0, 20 ],
              [ 0, 0, 0, 7, 0, 4 ],   
              [ 0, 0, 0, 0, 0, 0 ] ];

document.write("The maximum possible flow is " + fordFulkerson(graph, 0, 5));