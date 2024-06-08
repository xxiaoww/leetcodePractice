// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。



// 示例 1：


// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：


// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// 输出：true
// 示例 3：


// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// 输出：false




/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 二维矩阵，来存放是否用过 bool值
    let uesd = Array.from({ length: board.length }).map(() => new Array(board[0].length).fill(false))
    let m = board.length
    let n = board[0].length

    const dfs = (rol, col, i) => { //当前坐标，startIndex是当前考察的word字符
        if (startIndex === word.length) {
            return true
        }
        //    所有可能为false的情况
        if (row < 0 || rol >= m || col >= n || col < 0) {
            return false
        }
        if (used[rol][col] || board[rol][col] !== word[i]) {
            return false
        }

        used[rol][col] = true
            // 基于当前选择的点rol col 能否找到剩余的字符
        const rest = dfs(rol + 1, rol, i + 1) || dfs(rol, col + 1, i + 1) || dfs(rol - 1, col, i + 1) || dfs(rol, col - 1, i + 1)
        if (rest) {
            return true
        }
        used[rol][col] = false //撤销当前点的访问状态
        return false
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true
            }
        }
    }
};