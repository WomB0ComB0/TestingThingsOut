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