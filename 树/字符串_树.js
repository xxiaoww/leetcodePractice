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
    // 根节点
    let root = null
        // 记录父节点
    let stack = []
        // 临时存储节点的值
    let temp = ''

    // 判断遇到的字符串
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
            // 证明先前记录的节点有子节点
        if (str.charAt(i) === '(') {
            if (temp) {
                let node = new Node(temp)
                temp = ''
                    // 根节点
                if (!root) {
                    root = node
                }
                // 判断栈
                if (stack.length) {
                    stack[stack.length - 1].addChildren(node)
                }
                // 加入栈
                stack.push(node)
            }
        } else if (str.charAt(i) === ')') {
            if (temp) {
                let node = new Node(temp);
                temp = '';
                if (stack.length) {
                    stack[stack.length - 1].addChildren(node);
                }
            }
            stack.pop();

        } else if (str.charAt(i) === ',') {
            if (temp) {
                let node = new Node(temp)
                temp = ''
                if (stack.length) {
                    stack[stack.length - 1].addChildren(node);
                }
            }
        } else {
            temp += char
        }
    }
    return root.toString()
}



let res = createTree(
    "AA(BB(EE,FF(MM),GG),CC(HH(NN),II(OO,PP),JJ),DD(KK(QQ),LL))"
);
console.log("" + res);