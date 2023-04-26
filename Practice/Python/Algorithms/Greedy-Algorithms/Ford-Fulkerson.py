# Ford-Fulkerson algorith in Python
# A Ford-Fulkerson algorithm is a greedy algorithm that computes the maximum flow in a flow network.
from collections import defaultdict
class Graph: # Create a graph
    def __init__(self, graph): # Initialize the object
        self.graph = graph
        self. ROW = len(graph)
    def searching_algo_BFS(self, s, t, parent): # Using BFS as a searching algorithm
        visited = [False] * (self.ROW)
        queue = []
        queue.append(s)
        visited[s] = True
        while queue:
            u = queue.pop(0)
            for ind, val in enumerate(self.graph[u]):
                if visited[ind] == False and val > 0:
                    queue.append(ind)
                    visited[ind] = True
                    parent[ind] = u
        return True if visited[t] else False
    def ford_fulkerson(self, source, sink): # Applying fordfulkerson algorithm
        parent = [-1] * (self.ROW)
        max_flow = 0
        while self.searching_algo_BFS(source, sink, parent):
            path_flow = float("Inf")
            s = sink
            while(s != source):
                path_flow = min(path_flow, self.graph[parent[s]][s])
                s = parent[s]
            # Adding the path flows
            max_flow += path_flow
            # Updating the residual values of edges
            v = sink
            while(v != source):
                u = parent[v]
                self.graph[u][v] -= path_flow
                self.graph[v][u] += path_flow
                v = parent[v]
        return max_flow
graph = [[0, 8, 0, 0, 3, 0],
         [0, 0, 9, 0, 0, 0],
         [0, 0, 0, 0, 7, 2],
         [0, 0, 0, 0, 0, 5],
         [0, 0, 7, 4, 0, 0],
         [0, 0, 0, 0, 0, 0]]
g = Graph(graph)
source = 0
sink = 5
print("Max Flow: %d " % g.ford_fulkerson(source, sink))