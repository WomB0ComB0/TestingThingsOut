func findMinHeightTrees(n int, edges [][]int) []int {
		if n == 1 {
				return []int{0}
		}
		graph := make([][]int, n)
		for _, edge := range edges {
				graph[edge[0]] = append(graph[edge[0]], edge[1])
				graph[edge[1]] = append(graph[edge[1]], edge[0])
		}
		leaves := make([]int, 0)
		for i := 0; i < n; i++ {
				if len(graph[i]) == 1 {
						leaves = append(leaves, i)
				}
		}
		for n > 2 {
				n -= len(leaves)
				newLeaves := make([]int, 0)
				for _, leaf := range leaves {
						neighbor := graph[leaf][0]
						graph[neighbor] = remove(graph[neighbor], leaf)
						if len(graph[neighbor]) == 1 {
								newLeaves = append(newLeaves, neighbor)
						}
				}
				leaves = newLeaves
		}
		return leaves
}

func remove(arr []int, target int) []int {
		for i := 0; i < len(arr); i++ {
				if arr[i] == target {
						return append(arr[:i], arr[i+1:]...)
				}
		}
		return arr
}

func remove(arr []int, target int) []int {
	for i := 0; i < len(arr); i++ {
		if arr[i] == target {
			return append(arr[:i], arr[i+1:]...)
		}
	}
}

func tribonacci(n int) int {
	if n == 0 {
		return 0
	}
	if n == 1 || n == 2 {
		return 1
	}
	a, b, c := 0, 1, 1
	for i := 3; i <= n; i++ {
		a, b, c = b, c, a+b+c
	}
	return c
}

func tribonacci(n int) int {
	if n == 0 { return 0 }
	if n == 1 || n == 2 { return 1 }
	dp := make([]int, n+1)
	dp[1], dp[2] = 1, 1
	for i := 3; i <= n; i++ {
		dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
	}
	return dp[n]   
}