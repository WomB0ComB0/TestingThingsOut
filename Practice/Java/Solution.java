import java.*;

// class Solution {
//     public int sumNumbers(TreeNode root) {
//         Stack<String> stack = new Stack<>();
//         return dfs(root, stack);
//     }

//     public int dfs(TreeNode root, Stack<String> stack) {
//         if (root == null) {
//             return 0;
//         }

//         stack.push(String.valueOf(root.val));
//         if (root.left == null && root.right == null) {
//             int sum = 0;
//             for (String s : stack) {
//                 sum = sum * 10 + Integer.parseInt(s);
//             }
//             stack.pop();
//             return sum;
//         }
//         int left = dfs(root.left, stack);
//         int right = dfs(root.right, stack);
//         stack.pop();
//         return left + right;
//     }
// }

class Solution {
    public TreeNode addOneRow(TreeNode root, int val, int depth) {
        if (depth == 1) {
            TreeNode newRoot = new TreeNode(val);
            newRoot.left = root;
            return newRoot;
        }
        dfs(root, val, depth, 1);
        return root;
    }

    public void dfs(TreeNode root, int val, int depth, int curDepth) {
        if (root == null) {
            return;
        }
        if (curDepth == depth - 1) {
            TreeNode left = new TreeNode(val);
            TreeNode right = new TreeNode(val);
            left.left = root.left;
            right.right = root.right;
            root.left = left;
            root.right = right;
            return;
        }
        dfs(root.left, val, depth, curDepth + 1);
        dfs(root.right, val, depth, curDepth + 1);
    }
}

class Heap {
    private List<String> list;

    public Heap() {
        list = new ArrayList<>();
    }

    public void add(String s) {
        list.add(s);
        int index = list.size() - 1;
        while (index > 0) {
            int parent = (index - 1) / 2;
            if (list.get(index).compareTo(list.get(parent)) < 0) {
                String temp = list.get(index);
                list.set(index, list.get(parent));
                list.set(parent, temp);
                index = parent;
            } else {
                break;
            }
        }
    }

    public String peek() {
        return list.get(0);
    }
}

class Solution {
    public String smallestFromLeaf(TreeNode root) {
        String[] res = new String[1];
        res[0] = "~";
        dfs(root, new ArrayList<>(), res);
        return res[0];
    }

    public void dfs(TreeNode root, List<Character> list, String[] res) {
        if (root == null) {
            return;
        }
        list.add((char) (root.val + 'a'));
        if (root.left == null && root.right == null) {
            StringBuilder sb = new StringBuilder();
            for (int i = list.size() - 1; i >= 0; i--) {
                sb.append(list.get(i));
            }
            String s = sb.toString();
            if (s.compareTo(res[0]) < 0) {
                res[0] = s;
            }
        }
        dfs(root.left, list, res);
        dfs(root.right, list, res);
        list.remove(list.size() - 1);
    }
}

/**
 * class Solution:
 * def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
 * res = '~'
 * def sol(node, s=[]):
 * nonlocal res
 * if not node: return
 * s.append(chr(node.val+ord('a')))
 * if not node.left and not node.right:
 * res = min(res, ''.join(s[::-1]))
 * sol(node.left, s)
 * sol(node.right, s)
 * s.pop()
 * sol(root)
 * return res
 */

class Solution {
    public int islandPerimeter(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int res = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                res += 4 * grid[i][j];
                if (i > 0) {
                    res -= grid[i][j] * grid[i - 1][j];
                }
                if (j > 0) {
                    res -= grid[i][j] * grid[i][j - 1];
                }
                if (i < m - 1) {
                    res -= grid[i][j] * grid[i + 1][j];
                }
                if (j < n - 1) {
                    res -= grid[i][j] * grid[i][j + 1];
                }
            }
        }
        return res;
    }
}

class Solution {
    public int numIslands(char[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int res = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                res += grid[i][j] - '0';
                dfs(grid, i, j);
            }
        }
        return res;
    }

    public void dfs(char[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
            return;
        }
        if (grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0';
        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
    }
}

class Solution {
    public int[][] findFarmland(int[][] land) {
        int m = land.length;
        int n = land[0].length;
        List<int[]> list = new ArrayList<>();

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (land[i][j] == 1) {
                    int[] cur = new int[] { i, j, i, j };
                    dfs(land, i, j, cur);
                    list.add(cur);
                }
            }
        }
        int[][] res = new int[list.size()][4];
        for (int i = 0; i < list.size(); i++) {
            res[i] = list.get(i);
        }
        return res;
    }

    public void dfs(int[][] land, int i, int j, int[] cur) {
        if (i < 0 || i >= land.length || j < 0 || j >= land[0].length || land[i][j] == 0) {
            return;
        }
        cur[2] = Math.max(cur[2], i);
        cur[3] = Math.max(cur[3], j);
        land[i][j] = 0;
        dfs(land, i + 1, j, cur);
        dfs(land, i - 1, j, cur);
        dfs(land, i, j + 1, cur);
        dfs(land, i, j - 1, cur);
    }
}

class Solution {
    public int openLock(String[] deadends, String target) {
        Set<String> dead = new HashSet<>();
        for (String s : deadends) {
            dead.add(s);
        }
        if (dead.contains("0000")) {
            return -1;
        }
        if (target.equals("0000")) {
            return 0;
        }
        Queue<String> queue = new LinkedList<>();
        queue.offer("0000");
        Set<String> visited = new HashSet<>();
        visited.add("0000");
        int res = 0;

        while (!queue.isEmpty()) {
            res++;
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String cur = queue.poll();
                for (int j = 0; j < 4; j++) {
                    for (int k = -1; k <= 1; k += 2) {
                        char[] ch = cur.toCharArray();
                        ch[j] = (char) ((ch[j] - '0' + k + 10) % 10 + '0');
                        String next = new String(ch);
                        if (next.equals(target)) {
                            return res;
                        }
                        if (!dead.contains(next) && !visited.contains(next)) {
                            queue.offer(next);
                            visited.add(next);
                        }
                    }
                }
            }
        }
        return -1;
    }
}

class Solution {
    public List<Integer> findMinHeightTrees(int n, int[][] edges) {
        if (n == 1) {
            return Arrays.asList(0);
        }
        List<Set<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new HashSet<>());
        }
        for (int[] edge : edges) {
            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }
        List<Integer> leaves = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (graph.get(i).size() == 1) {
                leaves.add(i);
            }
        }
        while (n > 2) {
            n -= leaves.size();
            List<Integer> newLeaves = new ArrayList<>();
            for (int leaf : leaves) {
                int neighbor = graph.get(leaf).iterator().next();
                graph.get(neighbor).remove(leaf);
                if (graph.get(neighbor).size() == 1) {
                    newLeaves.add(neighbor);
                }
            }
            leaves = newLeaves;
        }
        return leaves;
    }
}

class Solution {
    public int tribonacci(int n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1 || n == 2) {
            return 1;
        }
        int[] dp = new int[n + 1];
        dp[1] = dp[2] = 1;
        for (int i = 3; i <= n; i++)
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        return dp[n];
    }
}

class Solution {
    public int longestIdealString(String s, int k) {
        int dp[] = new int[27];
        for (int i = 0; i < s.length(); i++) {
            int idx = s.charAt(i) - 'a';

            int left = Math.max((idx - k), 0);
            int right = Math.min((idx + k), 26);
            int max = Integer.MIN_VALUE;
            for (int j = left; j <= right; j++) {
                max = Math.max(max, dp[j]);
            }
            dp[idx] = max + 1;
        }
        int max = Integer.MIN_VALUE;
        for (int ele : dp) {
            max = Math.max(max, ele);
        }
        return max;
    }
}

class Solution {
    public int minFallingPathSum(int[][] grid) {
        int n = grid.length, res = Integer.MAX_VALUE;
        int[][] dp = new int[n][n];
        for (int row[] : dp) { // Short hand for loop
            // Fill the array with -1
            Arrays.fill(row, -1);
        }

        for (int j = 0; j < n; ++j) {
            // Fill the first row with the values of the first row of the grid
            dp[0][j] = grid[0][j];
        }

        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                int temp = Integer.MAX_VALUE;

                for (int k = 0; k < n; ++k) {
                    if (j != k) {
                        temp = Math.min(temp, grid[i][j] + dp[i - 1][k]);
                    }

                    dp[i][j] = temp;
                }
            }
        }

        for (int j = 0; j < n; ++j) {
            // Find the minimum value in the last row
            res = Math.min(res, dp[n - 1][j]);
        }

        return res;
    }
}

class Solution {
    public int findRotateSteps(String ring, String key) {
        int n = ring.length(), m = key.length();
        int[][] dp = new int[m + 1][n];
        for (int i = m - 1; i >= 0; i--) {
            for (int j = 0; j < n; j++) {
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = 0; k < n; k++) {
                    if (ring.charAt(k) == key.charAt(i)) {
                        int diff = Math.abs(j - k);
                        int step = Math.min(diff, n - diff);
                        dp[i][j] = Math.min(dp[i][j], step + dp[i + 1][k]);
                    }
                }
            }
        }
        return dp[0][0] + m;
    }
}

public class Dictionary<K, V> {
    private static final int SIZE = 16;
    private Entry<K, V>[] table;

    public Dictionary() {
        table = new Entry[SIZE];
    }

    public void put(K key, V value) {
        int index = key.hashCode() % SIZE;
        Entry<K, V> entry = new Entry<>(key, value);
        if (table[index] == null) {
            table[index] = entry;
        } else {
            Entry<K, V> cur = table[index];
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = entry;
        }
    }

    public V get(K key) {
        int index = key.hashCode() % SIZE;
        Entry<K, V> cur = table[index];
        while (cur != null) {
            if (cur.key.equals(key)) {
                return cur.value;
            }
            cur = cur.next;
        }
        return null;
    }

    public boolean containsKey(K key) {
        int index = key.hashCode() % SIZE;
        Entry<K, V> cur = table[index];
        while (cur != null) {
            if (cur.key.equals(key)) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    private static class Entry<K, V> {
        K key;
        V value;
        Entry<K, V> next;

        public Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
}

import java.util.*;

class Solution {
    Map<Integer, Set<Integer>> graph;
    int[] count;
    int[] res;
    int N;

    public int[] sumOfDistancesInTree(int N, int[][] edges) {
        this.graph = new HashMap<>();
        this.res = new int[N];
        this.count = new int[N];

        for (int[] edge : edges) {
            graph.computeIfAbsent(edge[0], x -> new HashSet<>()).add(edge[1]);
            graph.computeIfAbsent(edge[1], x -> new HashSet<>()).add(edge[0]);
        }

        Arrays.fill(count, 1);
        dfs(graph, 0, -1, count, res);
        dfs2(graph, 0, -1, count, res, N);
        return res;
    }

    private void dfs(Map<Integer, Set<Integer>> graph, int root, int pre, int[] count, int[] res) {
        Set<Integer> nextNodes = graph.get(root);
        if (nextNodes != null) {
            for (int next : nextNodes) {
                if (next == pre)
                    continue;
                dfs(graph, next, root, count, res);
                count[root] += count[next];
                res[root] += res[next] + count[next];
            }
        }
    }

    private void dfs2(Map<Integer, Set<Integer>> graph, int root, int pre, int[] count, int[] res, int n) {
        Set<Integer> nextNodes = graph.get(root);
        if (nextNodes != null) {
            for (int next : nextNodes) {
                if (next == pre)
                    continue;
                res[next] = res[root] - count[next] + n - count[next];
                dfs2(graph, next, root, count, res, n);
            }
        }
    }
}
class Solution {
    public int minOperations(int[] nums, int k) {
        int b = nums[0];
        // XOR all the elements in the array
        for (int i = 1; i < nums.length; i++) {
            b = nums[i] ^ b;
        }
        int res = 0;

        // XOR all the elements in the array with k
        while (b != 0 || k != 0) {
            // Get the last bit of b and k
            int bit1 = b & 1;
            int bit2 = k & 1;
            if (bit1 != bit2) {
                res++;
            }
            // Right shift b and k
            b = b >> 1;
            // Right shift k
            k = k >> 1;
        }
        return res;
    }
}


class Solution {
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        int res = 0;
        int left = 0;
        int right = people.length - 1;

        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                left++;
            }
            right--;
            res++;
        }
        return res;
    }
}