# Linked list implementation in Python
# A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.

class Node: # Creating a node
    def __init__(self, item):
        self.item = item
        self.next = None
class LinkedList: # Creating a linked list
    def __init__(self):
        self.head = None
    
    def print_list(self):
        cur_node = self.head
        while cur_node:
            print(cur_node.item)
            cur_node = cur_node.next
    
    def append(self, item):
        new_node = Node(item)
        if self.head is None:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node
    
    def prepend(self, item):
        new_node = Node(item)
        new_node.next = self.head
        self.head = new_node
        
    def insert_after_node(self, prev_node, item):
        if not prev_node:
            print("Previous node is not in the list")
            return
        new_node = Node(item)
        new_node.next = prev_node.next
        prev_node.next = new_node
    
    def delete_node(self, key):
        cur_node = self.head
        if cur_node and cur_node.item == key:
            self.head = cur_node.next
            cur_node = None
            return
        prev = None
        while cur_node and cur_node.item != key:
            prev = cur_node
            cur_node = cur_node.next
        if cur_node is None:
            return
        prev.next = cur_node.next
        cur_node = None
        
    def delete_node_at_pos(self, pos):
        cur_node = self.head
        if pos == 0:
            self.head = cur_node.next
            cur_node = None
            return
        prev = None
        count = 1
        while cur_node and count != pos:
            prev = cur_node
            cur_node = cur_node.next
            count += 1
        if cur_node is None:
            return
        prev.next = cur_node.next
        cur_node = None
    
    def len_iterative(self):
        count = 0
        cur_node = self.head
        while cur_node:
            count += 1
            cur_node = cur_node.next
        return count
    
    def len_recursive(self, node):
        if node is None:
            return 0
        return 1 + self.len_recursive(node.next)
    
    def swap_nodes(self, key1, key2):
        if key1 == key2:
            return
        prev1 = None
        cur1 = self.head
        while cur1 and cur1.item != key1:
            prev1 = cur1
            cur1 = cur1.next
        prev2 = None
        cur2 = self.head
        while cur2 and cur2.item != key2:
            prev2 = cur2
            cur2 = cur2.next
        if not cur1 or not cur2:
            return
        if prev1:
            prev1.next = cur2
        else:
            self.head = cur2
        if prev2:
            prev2.next = cur1
        else:
            self.head = cur1
        cur1.next, cur2.next = cur2.next, cur1.next
    
    def reverse_iterative(self):
        prev = None
        cur = self.head
        while cur:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        self.head = prev
        
    def reverse_recursive(self):
        def _reverse_recursive(cur, prev):
            if not cur:
                return prev
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
            return _reverse_recursive(cur, prev)
        self.head = _reverse_recursive(cur=self.head, prev=None)
    
    def merge_sorted(self, llist):
        p = self.head
        q = llist.head
        s = None
        if not p:
            return q
        if not q:
            return p
        if p and q:
            if p.item <= q.item:
                s = p
                p = s.next
            else:
                s = q
                q = s.next
            new_head = s
        while p and q:
            if p.item <= q.item:
                s.next = p
                s = p
                p = s.next
            else:
                s.next = q
                s = q
                q = s.next
        if not p:
            s.next = q
        if not q:
            s.next = p
        return new_head
    
    def remove_duplicates(self):
        cur = self.head
        prev = None
        dup_values = dict()
        while cur:
            if cur.item in dup_values:
                prev.next = cur.next
                cur = None
            else:
                dup_values[cur.item] = 1
                prev = cur
            cur = prev.next
    
    def print_nth_from_last(self, n):
        total_len = self.len_iterative()
        cur = self.head
        while cur:
            if total_len == n:
                print(cur.item)
                return cur.item
            total_len -= 1
            cur = cur.next
        if cur is None:
            return
    
    def rotate(self, k):
        p = self.head
        q = self.head
        prev = None
        count = 0
        while p and count < k:
            prev = p
            p = p.next
            q = q.next
            count += 1
        p = prev
        while q:
            prev = q
            q = q.next
        q = prev
        q.next = self.head
        self.head = p.next
        p.next = None
    
    def is_palindrome(self):
        s = ""
        p = self.head
        while p:
            s += p.item
            p = p.next
        return s == s[::-1]
    
    def move_tail_to_head(self):
        last = self.head
        second_to_last = None
        while last.next:
            second_to_last = last
            last = last.next
        last.next = self.head
        second_to_last.next = None
        self.head = last
    
    def sum_two_lists(self, llist):
        p = self.head
        q = llist.head
        sum_llist = LinkedList()
        carry = 0
        while p or q:
            if not p:
                i = 0
            else:
                i = p.item
            if not q:
                j = 0
            else:
                j = q.item
            s = i + j + carry
            if s >= 10:
                carry = 1
                remainder = s % 10
                sum_llist.append(remainder)
            else:
                carry = 0
                sum_llist.append(s)
            if p:
                p = p.next
            if q:
                q = q.next
        sum_llist.print_list()
        
    def is_circular_linked_list(self, input_list):
        cur = input_list.head
        while cur:
            cur = cur.next
            if cur == input_list.head:
                return True
        return False

if __name__ == '__main__': # Main function
    linked_list = LinkedList()
    # Assign item values
    linked_list.head = Node(1)
    second = Node(2)
    third = Node(3)
    # Connect nodes
    linked_list.head.next = second
    second.next = third
    # Print the linked list item
    while linked_list.head != None:
        print(linked_list.head.item, end=" ")
        linked_list.head = linked_list.head.next