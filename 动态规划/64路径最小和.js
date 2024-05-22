// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
// 示例 2：

// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const len = grid.length;
    const hei = grid[0].length;
    console.log(len, hei)
        // 建立一个二维结果数组
    let res = Array.from({ length: len })
        .map(() => new Array(hei).fill(0))
    res[0][0] = grid[0][0]
    for (let i = 0; i < len; i++) {
        // 最左边的数只能由上面加起来
        if (i !== 0) {
            res[i][0] = res[i - 1][0] + grid[i][0]
        }
        for (let j = 1; j < hei; j++) {
            // 当i等于0时，即第一行，只能由左边的依次递加
            if (i === 0) {
                res[i][j] = res[i][j - 1] + grid[i][j]
            } else {
                res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j]
            }
        }
    }
    console.log(res[len - 1][hei - 1])
    return res[len - 1][hei - 1]
};
minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
])