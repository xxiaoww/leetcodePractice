// 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。



// 示例1:

// 输入: pattern = "abba", s = "dog cat cat dog"
// 输出: true
// 示例 2:

// 输入:pattern = "abba", s = "dog cat cat fish"
// 输出: false
// 示例 3:

// 输入: pattern = "aaaa", s = "dog cat cat dog"
// 输出: false


// 提示:

// 1 <= pattern.length <= 300
// pattern 只包含小写英文字母
// 1 <= s.length <= 3000
// s 只包含小写英文字母和 ' '
// s 不包含 任何前导或尾随对空格
// s 中每个单词都被 单个空格 分隔


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// var wordPattern = function(pattern, s) {
//     let p1 = {},
//         x1 = {}
//     let str = ''
//     const temp = s.split(' ')
//     console.log(temp)
//     if (pattern.length !== temp.length) {
//         return false;
//     }
//     console.log(temp)
//     for (let i = 0; i < temp.length; i++) {
//         const x = temp[i],
//             y = pattern[i]
//         if (p1[x] && p1[x] !== y) {
//             return false
//         }
//         if (x1[y] && x1[y] !== x) return false
//         p1[x] = y
//         x1[y] = x
//     }
//     return true
// };
var wordPattern = function(pattern, s) {
    let charToWord = {};
    let wordToChar = {};

    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const char = pattern[i];

        if ((charToWord[char] && charToWord[char] !== word) ||
            (wordToChar[word] && wordToChar[word] !== char)) {
            console.log(charToWord[char])
            console.log(wordToChar[word])
            return false;
        }

        charToWord[char] = word;
        wordToChar[word] = char;
        console.log(charToWord[char], wordToChar[word])
    }

    return true;
};

// // 示例测试
// console.log(wordPattern("abba", "dog cat cat dog")); // true
// console.log(wordPattern("abba", "dog cat cat fish")); // false
// console.log(wordPattern("aaaa", "dog cat cat dog")); // false
console.log(wordPattern("abba", "dog constructor constructor dog")); // false