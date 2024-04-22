/*
    time: O(n)       
    space: O(n)
        O(n) for the stack, O(n) for the list
*/

public class Solution {
    public string RemoveKdigits(string num, int k) {
        
        Stack<char> stack = new Stack<char>();
        
        // O(n + k)
        foreach(char c in num)
        {
            while(stack.Count > 0 && stack.Peek() > c && k > 0)
            {
                stack.Pop();
                k--;
            }
            stack.Push(c);
        }
        
        // handle cases where digits are in non-descending order (12345, 11111)
        while(k > 0)
        {
            stack.Pop();
            k--;
        }
        
        List<char> res = new List<char>();
        while(stack.Count > 0)
        {
            res.Add(stack.Pop());
        }
        
        // handle cases where there are leading zeros after removing digits 
        // num = "98002", k =2. result string should be "2" instead of "002"
        // num = "98002" -> res = "200", so we need to removing ending zeros before reversing.
        int idx = res.Count - 1;
        while(idx >= 0)
        {
            if(res[idx] == '0')
            {
                res.RemoveAt(idx);
                idx--;
            }
            else
                break;
        }
        
        // if all digits are removed, return "0"
        if(res.Count == 0)
            return "0";
        
        char[] arr = res.ToArray();
        Array.Reverse(arr);       
        return new string(arr);
    }
}

public class Solution {
    public int SumNumbers(TreeNode root) {
        return dfs(root, 0);
    }
    public int dfs(TreeNode root, int sum)
    {
        if(root == null)
            return 0;
        
        sum = sum * 10 + root.val;
        
        if(root.left == null && root.right == null)
            return sum;
        
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
}

public class Solution {
    public TreeNode AddOneRow(TreeNode root, int val, int depth) {
        if(depth == 1)
        {
            TreeNode newRoot = new TreeNode(val);
            newRoot.left = root;
            return newRoot;
        }
        
        Queue<TreeNode> q = new Queue<TreeNode>();
        q.Enqueue(root);
        int level = 1;
        
        while(q.Count > 0)
        {
            int size = q.Count;
            for(int i = 0; i < size; i++)
            {
                TreeNode node = q.Dequeue();
                if(level == depth - 1)
                {
                    TreeNode left = new TreeNode(val);
                    TreeNode right = new TreeNode(val);
                    left.left = node.left;
                    right.right = node.right;
                    node.left = left;
                    node.right = right;
                }
                if(node.left != null)
                    q.Enqueue(node.left);
                if(node.right != null)
                    q.Enqueue(node.right);
            }
            level++;
        }
        
        return root;
    }
}


public class Solution {
    public string SmallestFromLeaf(TreeNode root) {
        string res = "";
        dfs(root, "", ref res);
        return res;
    }
    public void dfs(TreeNode root, string path, ref string res)
    {
        if(root == null)
            return;
        
        path = (char)(root.val + 'a') + path;
        
        if(root.left == null && root.right == null)
        {
            if(string.IsNullOrEmpty(res) || string.Compare(path, res) < 0)
                res = path;
        }
        
        dfs(root.left, path, ref res);
        dfs(root.right, path, ref res);
    }
}

public class Solution {
    public int IslandPerimeter(int[][] grid) {
        int perimeter = 0;
        for(int i = 0; i < grid.Length; i++)
        {
            for(int j = 0; j < grid[0].Length; j++)
            {
                if(grid[i][j] == 1)
                {
                    perimeter += 4;
                    if(i > 0 && grid[i - 1][j] == 1)
                        perimeter -= 2;
                    if(j > 0 && grid[i][j - 1] == 1)
                        perimeter -= 2;
                }
            }
        }
        return perimeter;
    }
}

int numIslands(char** grid, int gridSize, int* gridColSize) {
    if(gridSize == 0)
        return 0;
    
    int rows = gridSize;
    int cols = *gridColSize;
    int count = 0;
    
    for(int i = 0; i < rows; i++)
    {
        for(int j = 0; j < cols; j++)
        {
            if(grid[i][j] == '1')
            {
                dfs(grid, rows, cols, i, j);
                count++;
            }
        }
    }
    
    return count;
}

void dfs(char** grid, int rows, int cols, int i, int j)
{
    if(i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] == '0')
        return;
    
    grid[i][j] = '0';
    dfs(grid, rows, cols, i + 1, j);
    dfs(grid, rows, cols, i - 1, j);
    dfs(grid, rows, cols, i, j + 1);
    dfs(grid, rows, cols, i, j - 1);
}


public class Solution {
    public int NumIslands(char[][] grid) {
        if(grid.Length == 0)
            return 0;
        
        int rows = grid.Length;
        int cols = grid[0].Length;
        int count = 0;
        
        for(int i = 0; i < rows; i++)
        {
            for(int j = 0; j < cols; j++)
            {
                if(grid[i][j] == '1')
                {
                    dfs(grid, rows, cols, i, j);
                    count++;
                }
            }
        }
        
        return count;        
    }
    public void dfs(char[][] grid, int rows, int cols, int i, int j)
    {
        if(i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] == '0')
            return;
        
        grid[i][j] = '0';
        dfs(grid, rows, cols, i + 1, j);
        dfs(grid, rows, cols, i - 1, j);
        dfs(grid, rows, cols, i, j + 1);
        dfs(grid, rows, cols, i, j - 1);
    }
}


public class Solution {
    public int[][] FindFarmland(int[][] land) {
        List<int[]> res = new List<int[]>();
        int rows = land.Length;
        int cols = land[0].Length;
        
        for(int i = 0; i < rows; i++)
        {
            for(int j = 0; j < cols; j++)
            {
                if(land[i][j] == 1)
                {
                    int[] farmland = new int[4];
                    farmland[0] = i;
                    farmland[1] = j;
                    dfs(land, i, j, farmland);
                    res.Add(farmland);
                }
            }
        }
        
        return res.ToArray();
    }
    public void dfs(int[][] land, int i, int j, int[] farmland)
    {
        if(i < 0 || i >= land.Length || j < 0 || j >= land[0].Length || land[i][j] == 0)
            return;
        
        land[i][j] = 0;
        farmland[2] = Math.Max(farmland[2], i);
        farmland[3] = Math.Max(farmland[3], j);
        
        dfs(land, i + 1, j, farmland);
        dfs(land, i - 1, j, farmland);
        dfs(land, i, j + 1, farmland);
        dfs(land, i, j - 1, farmland);
    }
}

public class Solution {
    public int OpenLock(string[] deadends, string target) {
        HashSet<string> vis = new HashSet<string>();
        HashSet<string> deads = new HashSet<string>(deadends);
        Queue<string> q = new Queue<string>();
        q.Enqueue("0000");
        int turns = 0;
        
        while(q.Count > 0)
        {
            int size = q.Count;
            for(int i = 0; i < size; i++)
            {
                string curr = q.Dequeue();
                if(curr == target)
                    return turns;
                if(deads.Contains(curr) || vis.Contains(curr))
                    continue;
                vis.Add(curr);
                for(int j = 0; j < 4; j++)
                {
                    int up = (curr[j] - '0' + 1) % 10;
                    int down = (curr[j] - '0' + 9) % 10;
                    string upStr = curr.Substring(0, j) + up + curr.Substring(j + 1);
                    string downStr = curr.Substring(0, j) + down + curr.Substring(j + 1);
                    if(!vis.Contains(upStr))
                        q.Enqueue(upStr);
                    if(!vis.Contains(downStr))
                        q.Enqueue(downStr);
                }
            }
            turns++;
        }
        
        return -1;    
    }
    
}

/**
        vis = set()
        q = Deque([("0000", 0)])
        while q:
            curr, turn = q.popleft()
            if curr == target:
                return turn
            if curr in deadends or curr in vis:
                continue
            vis.add(curr)
            for i, c in enumerate(curr):
                up, down = (int(c) + 1) % 10, (int(c) - 1) % 10
                if up not in vis:
                    q.append((curr[:i] + str(up) + curr[i + 1 :], turn + 1))
                if down not in vis:
                    q.append((curr[:i] + str(down) + curr[i + 1 :], turn + 1))
        return -1
*/ 