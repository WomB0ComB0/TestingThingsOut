char* removeKdigits(char* num, int k) {
    int len = strlen(num);
    if(len == k){
        char* ans = (char*)malloc(2*sizeof(char));
        ans[0] = '0';
        ans[1] = '\0';
        return ans;
    }
    
    char* stack = (char*)malloc(len*sizeof(char));
    int top = -1;
    
    for(int i=0; i<len; i++){
        char ch = num[i];
        while(top>=0 && k>0 && stack[top]>ch){
            top--;
            k--;
        }
        stack[++top] = ch;
    }
    
    while(k>0){
        top--;
        k--;
    }
    
    while(top>=0 && stack[top]=='0'){top--;}
    
    if(top == -1){
        char* ans = (char*)malloc(2*sizeof(char));
        ans[0] = '0';
        ans[1] = '\0';
        return ans;
    }
    
    char* ans = (char*)malloc((top+2)*sizeof(char));
    for(int i=0; i<=top; i++){ ans[i] = stack[i];}
    ans[top+1] = '\0';
    return ans;
}

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int sumNumbers(struct TreeNode* root) {
    if(!root) return 0;
    int stack[1000];
    int top = -1;
    int count = 0;
    stack[++top] = root->val;
    if(!root->left && !root->right){
        count = root->val;
    }
    if(root->left){
        count += dfs(root->left, stack, top);
    }
    if(root->right){
        count += dfs(root->right, stack, top);
    }
    return count;
}

int dfs(struct TreeNode* root, int* stack, int top){
    stack[++top] = root->val;
    int count = 0;
    if(!root->left && !root->right){
        for(int i=0; i<=top; i++){
            count = count*10 + stack[i];
        }
    }
    if(root->left){
        count += dfs(root->left, stack, top);
    }
    if(root->right){
        count += dfs(root->right, stack, top);
    }
    return count;
}

struct TreeNode* addOneRow(struct TreeNode* root, int val, int depth) {
    if(depth == 1){
        struct TreeNode* newRoot = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        newRoot->val = val;
        newRoot->left = root;
        newRoot->right = NULL;
        return newRoot;
    }
    
    struct TreeNode* layer[1000];
    int layerSize = 1;
    layer[0] = root;
    
    for(int i=2; i<depth; i++){
        struct TreeNode* nextLayer[1000];
        int nextLayerSize = 0;
        for(int j=0; j<layerSize; j++){
            struct TreeNode* node = layer[j];
            if(node->left){
                nextLayer[nextLayerSize++] = node->left;
            }
            if(node->right){
                nextLayer[nextLayerSize++] = node->right;
            }
        }
        layerSize = nextLayerSize;
        for(int j=0; j<layerSize; j++){
            layer[j] = nextLayer[j];
        }
    }
    
    for(int i=0; i<layerSize; i++){
        struct TreeNode* node = layer[i];
        struct TreeNode* left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        left->val = val;
        left->left = node->left;
        left->right = NULL;
        node->left = left;
        
        struct TreeNode* right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
        right->val = val;
        right->left = NULL;
        right->right = node->right;
        node->right = right;
    }
    
    return root;
}

#define MIN_CHAR 'a'

void dfs(struct TreeNode* root, char* sb, int depth, char** sans) {
    if (root == NULL) {
        return;
    }

    sb[depth] = root->val + MIN_CHAR;
    if (root->left == NULL && root->right == NULL) {
        sb[depth + 1] = '\0';
        char* rev = strdup(sb);
        strrev(rev);
        if (*sans == NULL || strcmp(rev, *sans) < 0) {
            free(*sans);
            *sans = rev;
        } else {
            free(rev);
        }
    } else {
        dfs(root->left, sb, depth + 1, sans);
        dfs(root->right, sb, depth + 1, sans);
    }
}

void strrev(char *str) {
    if (str) {
        char *end = str + strlen(str) - 1;
        
        while (str < end) {
            char temp = *str;
            *str = *end;
            *end = temp;

            str++;
            end--;
        }
    }
}

char* smallestFromLeaf(struct TreeNode* root) {
    char* sb = malloc(8501);
    char* sans = NULL;
    dfs(root, sb, 0, &sans);
    free(sb);
    return sans;
}

int islandPerimeter(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = *gridColSize, res = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                if (i == 0 || grid[i - 1][j] == 0) {
                    res++;
                }
                if (i == m - 1 || grid[i + 1][j] == 0) {
                    res++;
                }
                if (j == 0 || grid[i][j - 1] == 0) {
                    res++;
                }
                if (j == n - 1 || grid[i][j + 1] == 0) {
                    res++;
                }
            }
        }
    }
    return res;
}


/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** findFarmland(int** land, int landSize, int* landColSize, int* returnSize, int** returnColumnSizes) {
    int maxFarmlands = landSize * (*landColSize);  // Maximum possible number of farmlands
    int** farmlands = (int**)malloc(maxFarmlands * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxFarmlands * sizeof(int));
    *returnSize = 0;
    for (int i = 0; i < landSize; i++) {
        for (int j = 0; j < *landColSize; j++) {
            if (land[i][j] == 1) {
                int row = i, col = j;
                while (row < landSize && land[row][j] == 1) {
                    row++;
                }
                while (col < *landColSize && land[i][col] == 1) {
                    col++;
                }
                for (int x = i; x < row; x++) {
                    for (int y = j; y < col; y++) {
                        land[x][y] = 0;  // Mark as visited
                    }
                }
                farmlands[*returnSize] = (int*)malloc(4 * sizeof(int));
                farmlands[*returnSize][0] = i;
                farmlands[*returnSize][1] = j;
                farmlands[*returnSize][2] = row - 1;
                farmlands[*returnSize][3] = col - 1;
                (*returnColumnSizes)[*returnSize] = 4;
                (*returnSize)++;
            }
        }
    }
    return farmlands;
}