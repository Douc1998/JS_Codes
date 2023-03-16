// Node 节点
function Node(val) {
    this.val = val;
    this.next = null;
  }
  
  // 反转链表：双指针法
  function mergeLinkList(head1, head2) {
    // 虚拟头节点
    let newHead = new Node(-1);
    let temp = newHead;
    while (head1 && head2) {
      if (head1.val < head2.val) {
        temp.next = head1;
        head1 = head1.next;
      }else{
        temp.next = head2;
        head2 = head2.next;
      }
      temp = temp.next;
    }
    // 找出剩余的链表，直接加在最后
    head1 && (temp.next = head1);
    head2 && (temp.next = head2);
    return newHead.next;
  }
  
  
  
  // 构建链表
  let node1 = new Node(1);
  let node3 = new Node(3);
  let node5 = new Node(5);
  node1.next = node3;
  node3.next = node5;
  
  let node2 = new Node(2);
  let node4 = new Node(4);
  let node6 = new Node(6);
  node2.next = node4;
  node4.next = node6;
  
  
  // 链表合并
  let newHead = mergeLinkList(node1, node2);
  while (newHead) {
    console.log(newHead.val);
    newHead = newHead.next;
  } // 1 2 3 4 5 6
  