class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
  }
  
  function merge_sort(head) {
    if (!head || !head.next) return head;
    let slow = head, fast = head, prev;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    let left = merge_sort(head);
    let right = merge_sort(slow);
    return merge(left, right);
  }
  
  function merge(left, right) {
    let dummy = new ListNode();
    let cur = dummy;
    while (left && right) {
        if (left.val < right.val) {
            cur.next = left;
            left = left.next;
        } else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }
    if (left) cur.next = left;
    if (right) cur.next = right;
    return dummy.next;
  }
  