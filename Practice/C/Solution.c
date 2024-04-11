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