// 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

// 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 
// 子字符串
// ：

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
// 注意：a + b 意味着字符串 a 和 b 连接。



// 示例 1：


// 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// 输出：true
// 示例 2：

// 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// 输出：false
// 示例 3：

// 输入：s1 = "", s2 = "", s3 = ""
// 输出：true



/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false
    }
    let dp = Array.from({ length: s1.length + 1 }).map(() => new Array(s2.length + 1).fill(false))
    dp[0][0] = true
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (i > 0) {
                let p = i + j - 1
                console.log(p)
                dp[i][j] = dp[i][j] || dp[i - 1][j] && s1[i - 1] === s3[p]
            }
            if (j > 0) {
                let p = i + j - 1
                dp[i][j] = dp[i][j] || dp[i][j - 1] && s2[j - 1] === s3[p]
            }
        }
    }
    console.log(dp[s1.length][s2.length])
    return dp[s1.length][s2.length]
};
isInterleave('aabc', 'abad', 'aabcabad')