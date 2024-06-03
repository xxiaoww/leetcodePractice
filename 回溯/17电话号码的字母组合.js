// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例 1：

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
// 示例 2：

// 输入：digits = ""
// 输出：[]
// 示例 3：

// 输入：digits = "2"
// 输出：["a","b","c"]

/**
 * @param {string} digits
 * @return {string[]}
 */
// 可以想到如果有2个数，那就得两个for循环，如果有三个数，就要有三个for循环，这时候就用到了回溯
// 回溯的思想就是通过尝试不同的选择并回溯到之前的状态，知道找到解决问题的方法
var letterCombinations = function(digits) {
    if (digits.length <= 0) return []
    const res = []
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    // dfs的i是表示当前是第几层，如我有两个数字，那么我的i会有两层，即有两层for循环
    const dfs = (curstr, i) => {
        if (i > digits.length - 1) {
            res.push(curstr) //当curstr有i个数时，推入res作为其中的一个答案
            return //结束当前递归分支，不走下面的逻辑
        }
        const letters = map[digits[i]]
        for (const letter of letters) { //遍历digits的第i个数字对应的字母
            dfs(curstr + letter, i + 1) //将当前的字母添加到curstr中，并递归调用dfs，继续遍历下一个数字
        }
    }
    dfs('', 0) //递归的入口
    return res
};