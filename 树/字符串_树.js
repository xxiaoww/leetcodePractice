class Node {
    constructor(value) {
        this.value = value;
        this.id = "" + Math.random();
        this.children = [];
        this.addChildren = this.children.push.bind(this.children);
        this.toString = () =>
            this.children.length ?
            `${this.value}(${this.children.join(",")})` :
            this.value;
    }
}
// 整体思路
// 根节点在一开始的时候直接new node
//   //给我的感觉是回溯，需要子节点对应的父节点，这个跟(左括号有关系，
// 什么时候不要这个父节点，就是遇到)右括号的时候
// 字符串遇到，逗号说明还是子节点的父节点还是最近的那个

function createTree(str) {
    // 在此处书写你的代码

    let root = null
        // 记录父节点
    let stack = []
        // 根节点

    // 判断遇到的字符串
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (str.charAt(i) === '(') {
            stack.push(root)
            root = null
        } else if (str.charAt(i) === ')') {
            // 子树创建完成，添加到父节点
            let parent = stack.pop()
            parent.children.push(root)
                // 重定向
            root = parent
        } else if (str.charAt(i) === ',') {

        } else {
            let ch = str.charAt(i) + str.charAt(i + 1)
            i = i + 1
            let node = new Node(ch)
                // 根节点为空
            if (root === null) {
                root = node
            } else {
                root.addChildren(node)
            }
        }

    }
    return root.toString()
}

// function createTree(str) {
//     let root = null;
//     let stack = [];

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (str.charAt(i) === '(') {
//             // root作为父节点，推入栈中
//             stack.push(root);
//             root = null
//         } else if (str.charAt(i) === ')') {

//             let parent = stack.pop();
//             parent.children.push(root);
//             root = parent;
//         } else if (str.charAt(i) === ',') {
//             // No action needed
//         } else {
//             let ch = str.charAt(i) + str.charAt(i + 1);
//             i = i + 1;
//             let node = new Node(ch);
//             if (root === null) {
//                 root = node;
//             } else {
//                 root.addChildren(node);
//             }
//         }
//     }
//     return root.toString();
// }

let res = createTree(
    "AA(BB(EE,FF(MM),GG),CC(HH(NN),II(OO,PP),JJ),DD(KK(QQ),LL))"
);
console.log("" + res);