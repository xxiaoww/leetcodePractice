// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。



// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]


// 提示：

// 1 <= n <= 8


/**
 * @param {number} n
 * @return {string[]}
 */

// 方法一：用回溯做出来
var generateParenthesis = function(n) {
    let res = []
    let path = new Array(n * 2)
    const dfs = (i, open) => {
        if (i === n * 2) {
            res.push(path.join(""))
            return
        }
        if (open < n) { //可以添加左括号
            path[i] = ("(")
            dfs(i + 1, open + 1)
        }
        if (i - open < open) { //可以添加右括号
            path[i] = (")")
            dfs(i + 1, open)
        }
    }
    dfs(0, 0)
    console.log(res)
    return res
};
// generateParenthesis(3)

// 方法二：使用全排列括号，然后再进行筛选