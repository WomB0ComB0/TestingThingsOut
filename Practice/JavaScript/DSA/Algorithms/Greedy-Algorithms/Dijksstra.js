const vertices = [[0, 0, 1, 1, 0, 0, 0],
[0, 0, 1, 0, 0, 1, 0],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 1, 0, 0, 0, 1],
[0, 0, 1, 0, 0, 1, 0],
[0, 1, 0, 0, 1, 0, 1],
[0, 0, 0, 1, 0, 1, 0]]
const edges = [[0, 0, 1, 2, 0, 0, 0],
[0, 0, 2, 0, 0, 3, 0],
[1, 2, 0, 1, 3, 0, 0],
[2, 0, 1, 0, 0, 0, 1],
[0, 0, 3, 0, 0, 2, 0],
[0, 3, 0, 0, 2, 0, 1],
[0, 0, 0, 1, 0, 1, 0]]

function toBeVisited() {
    var visited = [];
    let v = -10;
    for (let index = 0; index < vertices.length; index++) {
        if (visited[index][0] == 0 && (v < 0 || visited[index][1] <= visited[v][1])) {
            v = index;
        }
    }
    return v;
}


const num_of_vertices = vertices[0].length
const visited_and_distance = [[0, 0]]

for (let i = 0; i < num_of_vertices - 1; i++) {
    visited_and_distance.push([0, Infinity])
}

for (let vertex = 0; vertex < num_of_vertices; vertex++) {
    let to_visit = toBeVisited()
    for (let neighbor = 0; neighbor < num_of_vertices; neighbor++) {
        if (vertices[to_visit][neighbor] == 1 && visited_and_distance[neighbor][0] == 0) {
            let new_distance = visited_and_distance[to_visit][1] + edges[to_visit][neighbor]
            if (new_distance < visited_and_distance[neighbor][1]) {
                visited_and_distance[neighbor][1] = new_distance
            }
        }
    }
    visited_and_distance[to_visit][0] = 1
}

i = 0

for (distance in visited_and_distance) {
    console.log(`Distance of vertex ${i} is ${visited_and_distance[distance][1]}`)
    i++
}