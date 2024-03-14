def decode(root):
    colMap = {}
    minCol = 0

    def dfs(node, col):
        if node:
            minCol = min(minCol, col)
            if col not in colMap:
                colMap[col] = []
            colMap[col].append(node.val)
            dfs(node.left, col - 1)
            dfs(node.right, col + 1)

    dfs(root, 0)
    string = ""
    for i in range(minCol, minCol + len(colMap)):
        string += "".join(colMap[i])
    return string
