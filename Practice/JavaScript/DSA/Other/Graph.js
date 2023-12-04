/**
 * Represents a graph using an adjacency list.
 * @constructor
 * @param {number} noOfVertices - The number of vertices in the graph.
 */
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  /**
   * Adds a new vertex to the graph.
   * @param {*} v - The vertex to be added.
   */
  addVertex(v) {
    this.AdjList.set(v, []);
  }

  /**
   * Adds an undirected edge between two vertices.
   * @param {*} v - The first vertex.
   * @param {*} w - The second vertex.
   */
  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  /**
   * Prints the graph with vertices and their adjacency lists.
   */
  printGraph() {
    var get_keys = this.AdjList.keys();

    for (var i of get_keys) {
      var get_values = this.AdjList.get(i);
      var conc = "";

      for (var j of get_values) conc += j + " ";

      console.log(i + " -> " + conc);
    }
  }

  /**
   * Performs breadth-first search (BFS) starting from a given node.
   * @param {*} startingNode - The starting node for BFS.
   */
  bfs(startingNode) {
    var visited = [];
    for (var i = 0; i < this.noOfVertices; i++) visited[i] = false;

    var q = new Queue();

    visited[startingNode] = true;
    q.enqueue(startingNode);

    while (!q.isEmpty()) {
      var getQueueElement = q.dequeue();

      console.log(getQueueElement);

      var get_List = this.AdjList.get(getQueueElement);

      for (var i in get_List) {
        var neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }

  /**
   * Performs depth-first search (DFS) starting from a given node.
   * @param {*} startingNode - The starting node for DFS.
   */
  dfs(startingNode) {
    var visited = {};
    this.DFSUtil(startingNode, visited);
  }

  /**
   * Helper function for DFS traversal.
   * @param {*} vert - The current vertex being visited.
   * @param {Object} visited - An object to track visited vertices.
   */
  DFSUtil(vert, visited) {
    visited[vert] = true;
    console.log(vert);

    var get_neighbours = this.AdjList.get(vert);

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i];
      if (!visited[get_elem]) this.DFSUtil(get_elem, visited);
    }
  }
}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
