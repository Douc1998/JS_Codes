// Node 节点
function Node(val) {
    this.val = val;
    this.next = null;
}

// 反转链表：双指针法
function reserveLinkList(head) {
    // 双指针记录
    let prev = null;
    let cur = head;
    let temp = new Node();
    while (cur) {
        temp = cur.next;
        cur.next = prev;
        // 更新 prev 和 cur
        prev = cur;
        cur = temp;
    }
    return prev;
}

// 递归法
function reserve(prev, cur) {
    // 判断终止条件
    if (cur === null) return prev;
    // 也是需要一个 temp 节点来存储下一个节点
    let tempNode = new Node();
    tempNode = cur.next;
    // 修改指向
    cur.next = prev;
    return reserve(cur, tempNode);
}

// 构建链表
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3;

// 输出正序链表
let cur = node1;
while (cur) {
    console.log(cur.val);
    cur = cur.next;
} // 1 2 3

// 链表反转并输出
// let newHead = reserveLinkList(node1); // 双指针法
let newHead = reserve(null, node1); // 递归法
let newCur = newHead;
while (newCur) {
    console.log(newCur.val);
    newCur = newCur.next;
} // 3 2 1
