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

func longestIdealString(s string, k int) int {
	dp := make([]int, 26)
	for i := 0; i < s.length(); i++ {
		idx = s.charAt(i) - 'a'

		left := max()
	}
}

func charAt(s string, index int) byte {
	return s[index]
}

package  main


import (
	"math"
)

// Triplet is a struct to store the minSum, secondMinSum and minSumIndex
type Triplet struct {
	minSum int
	secondMinSum int
	minSumIndex int
}

// minFallingPathSum is a function to find the minimum falling path sum
func minFallingPathSum(grid [][]int) int {
	return minFallingPathSumHelper(0,  grid).minSum
}

func minFallingPathSumHelper(row int, grid [][]int) Triplet {
	// Base case
	if row == len(grid) {
		return Triplet{0, 0, 0}
	}
	// We need to find the minimum sum of the next row
	nextRowTriplet := minFallingPathSumHelper(row + 1, grid)
	// This is the current triplet
	currentTriplet := Triplet{math.MaxInt32, math.MaxInt32, -1}

	// We need to iterate over the columns of the current row
	for col := 0; col < len(grid[0]); col++ {
		// We need to find the minimum sum of the current row so
		// grid[row][col] -> current element
		// nextRowTriplet.minSum -> minimum sum of the next row
		currentSum := grid[row][col] + nextRowTriplet.secondMinSum
		// If the current column is the minSumIndex of the next row
		if col == nextRowTriplet.minSumIndex {
			currentSum = grid[row][col] + nextRowTriplet.secondMinSum
		} else {
			currentSum = grid[row][col] + nextRowTriplet.minSum
		}
		// If the current sum is less than the minSum of the currentTriplet
		if currentSum < currentTriplet.minSum {
			// We need to update the minSum and secondMinSum
			currentTriplet.secondMinSum = currentTriplet.minSum
			currentTriplet.minSum = currentSum
			currentTriplet.minSumIndex = col
		// If the current sum is less than the secondMinSum of the currentTriplet	
		} else if currentSum < currentTriplet.secondMinSum {
			currentTriplet.secondMinSum = currentSum
		}
	}
	return currentTriplet
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func findRotateSteps(ring string, key string) int {
	var m, n = len(ring), len(key)
	var pos = make(map[uint8][]int)
	for i := 0; i < len(ring); i++ {
		pos[ring[i]] = append(pos[ring[i]], i)
	}
	var mem = make([][]int, m)
	for i := range mem {
		mem[i] = make([]int, n)
		for j := range mem[i] {
			mem[i][j] = -1
		}
	}
	var dfs func(i, j int) int // ring[i] is currently at 12 o'clock , j stands for current key[j]
	dfs = func(i, j int) (res int) {
		if j == n {
			return
		}
		var p = &mem[i][j]
		if *p != -1 {
			return *p
		}
		defer func() { *p = res }()
		res = math.MaxInt
		for _, po := range pos[key[j]] { // scan all the position key[j] in ring
			res = min(res, dfs(po, j+1)+min(abs(i-po), m-abs(i-po))) // we need to make po at 12 o'clock by rotating ring clockwise or counterclockwise (choose the smaller one), and then plus dfs(po,j+1)
		}
		return
	}
	return n + dfs(0, 0) // every char in key needs to be pressed too
}