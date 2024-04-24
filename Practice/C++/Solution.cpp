#include <vector>
#include <iostream>
#include <algorithm>
#include <climits>
#include <sstream>

using namespace std;

// class Solution {
// public:
//     int sumNumbers(TreeNode* root)
//     {
//         std::vector<std::string> stack;
//         return dfs(root, stack);
//     }

//     int dfs(TreeNode* root, std::vector<std::string>& stack) {
//         if (!root) return 0;
//         stack.push_back(std::to_string(root->val));
//         int count = 0;
//         if (!root->left && !root->right) {
//             std::stringstream ss;
//             for(const auto& s: stack) {
//                 ss << s;
//             }
//             count = std::stoi(ss.str());
//         }
//         count += dfs(root->left, stack);
//         count += dfs(root->right, stack);
//         stack.pop_back();
//         return count;
//     }
// };

class Solution {
    public:
        TreeNode* addOneRow(TreeNode* root, int val, int depth) {
            if (depth == 1) return new TreeNode(val, root, nullptr);
            vector<TreeNode*> layer { root };
            for (int i = 2; i < depth; i++) {
                vector<TreeNode*> nextLayer;
                for (TreeNode* node: layer) {
                    if (node->left) nextLayer.push_back(node->left);
                    if (node->right) nextLayer.push_back(node->right);
                }
                swap(layer, nextLayer);
            }
            for (TreeNode* node: layer) {
                node->left = new TreeNode(val, node->left, nullptr);
                node->right = new TreeNode(val, nullptr, node->right);
            }
            return root;
        }
};

class Solution
{
public:
    string smallestFromLeaf(TreeNode *root)
    {
        string res = "";
        dfs(root, "", res);
        return res;
    }
    void dfs(TreeNode *root, string path, string &res)
    {
        if (!root)
            return;
        path = char('a' + root->val) + path;
        if (!root->left && !root->right)
        {
            if (res == "")
                res = path;
            else
                res = min(res, path);
        }
        dfs(root->left, path, res);
        dfs(root->right, path, res);
    }
};

class Solution
{
public:
    int islandPerimeter(vector<vector<int>> &grid)
    {
        int m = grid.size(), n = grid[0].size(), res = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid[i][j] == 1)
                {
                    if (i == 0 || grid[i - 1][j] == 0)
                        res++;
                    if (i == m - 1 || grid[i + 1][j] == 0)
                        res++;
                    if (j == 0 || grid[i][j - 1] == 0)
                        res++;
                    if (j == n - 1 || grid[i][j + 1] == 0)
                        res++;
                }
            }
        }
        return res;
    }
};

class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int m = grid.size(), n = grid[0].size(), res = 0;
        int islands = 0;
        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                if (grid[row][col] == '1') {
                    islands++;
                    dfs(grid, row, col);
                }
            }
        }
        return islands;
    }
    void dfs(vector<vector<char>>& grid, int row, int col) {
        if (row < 0 || col < 0 || row >= grid.size() || col >= grid[0].size() || grid[row][col] == '0') {
            return;
        }
        grid[row][col] = '0';
        dfs(grid, row + 1, col);
        dfs(grid, row - 1, col);
        dfs(grid, row, col + 1);
        dfs(grid, row, col - 1);
    }
};

class Solution
{
public:
    vector<vector<int>> findFarmland(vector<vector<int>> &land)
    {
        vector<vector<int>> res;
        int m = land.size(), n = land[0].size();
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (land[i][j] == 1)
                {
                    int x = i, y = j;
                    while (x < m && land[x][j] == 1)
                        x++;
                    while (y < n && land[i][y] == 1)
                        y++;
                    for (int a = i; a < x; a++)
                    {
                        for (int b = j; b < y; b++)
                        {
                            land[a][b] = 0;
                        }
                    }
                    res.push_back({i, j, x - 1, y - 1});
                }
            }
        }
        return res;
    }
};

class Solution
{
public:
    int openLock(vector<string> &deadends, string target)
    {
        unordered_set<string> dead(deadends.begin(), deadends.end());
        if (dead.count("0000")) return -1;
        if (target == "0000") return 0;
        queue<string> q;
        q.push("0000");
        int res = 0;
        while (!q.empty())
        {
            res++;
            int size = q.size();
            for (int i = 0; i < size; i++)
            {
                string t = q.front();
                q.pop();
                for (int j = 0; j < 4; j++)
                {
                    for (int k = -1; k <= 1; k += 2)
                    {
                        string s = t;
                        s[j] = (s[j] - '0' + k + 10) % 10 + '0';
                        if (s == target)
                            return res;
                        if (!dead.count(s))
                        {
                            q.push(s);
                            dead.insert(s);
                        }
                    }
                }
            }
        }
        return -1;
    }
};

class Solution
{
public:
    vector<int> findMinHeightTrees(int n, vector<vector<int>> &edges)
    {
        if (n == 1) return {0};
        vector<unordered_set<int>> adj(n);
        for (auto &e : edges)
        {
            adj[e[0]].insert(e[1]);
            adj[e[1]].insert(e[0]);
        }
        queue<int> q;
        for (int i = 0; i < n; i++)
        {
            if (adj[i].size() == 1) q.push(i);
        }
        while (n > 2)
        {
            int size = q.size();
            n -= size;
            for (int i = 0; i < size; i++)
            {
                int t = q.front();
                q.pop();
                for (int a : adj[t])
                {
                    adj[a].erase(t);
                    if (adj[a].size() == 1) q.push(a);
                }
            }
        }
        vector<int> res;
        while (!q.empty())
        {
            res.push_back(q.front());
            q.pop();
        }
        return res;
    }
};

class Solution
{
public:
    int tribonacci(int n)
    {
        if (n == 0) return 0;
        if (n == 1 || n == 2) return 1;
        int a = 0, b = 1, c = 1, d;
        for (int i = 3; i <= n; i++)
        {
            d = a + b + c;
            a = b;
            b = c;
            c = d;
        }
        return c;
    }
};

class Solution {
public:
    int tribonacci(int n) {
        if (n == 0) return 0;
        if (n == 1 || n == 2) return 1;
        vector<int> dp(n + 1);
        dp[1] = dp[2] = 1;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }
        return dp[n];
    }
};