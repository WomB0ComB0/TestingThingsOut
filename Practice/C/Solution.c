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