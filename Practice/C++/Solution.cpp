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