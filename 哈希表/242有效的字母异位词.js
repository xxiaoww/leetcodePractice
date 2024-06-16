// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。



// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false


// 提示:

// 1 <= s.length, t.length <= 5 * 104
// s 和 t 仅包含小写字母


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();

    // 计数 s 中字符出现的次数
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    // 减少 t 中字符出现的次数
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) {
            return false;
        }
        map.set(t[i], map.get(t[i]) - 1);
        if (map.get(t[i]) < 0) {
            return false;
        }
    }

    return true;
}
console.log(isAnagram("anagram", "nagaram"))