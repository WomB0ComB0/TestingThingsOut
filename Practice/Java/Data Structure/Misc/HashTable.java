// A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array in which an element will be inserted or searched. By using this hash function we can search a key in O(1) time in the average case.

/**
 * The Hash table data structure stores elements in key-value pairs where
 * 
 * Key- unique integer that is used for indexing the values
 * Value - data that are associated with keys.
*/

/**
 * Hash Collision
 * When the hash function generates the same index for multiple keys, there will be a conflict(what value to be stored in that index). This is called a hash collision.
 * 
 * We can resolve the hash collision using one of the following techniques
 * 
 * Collision resolution by chaining
 * Open Addressing: Linear/Quadratic Probing and Double Hashing
*/

/**
 * Collision Resolution by Chaining
 * 
 * In chaining, if a hash function produces the same index for multiple elements, these elements are stored in the same index by using a doubly linked list.
 * 
 * If j is the slot for multiple elements, it contains a pointer to teh head of th list of elements. If no element is present, j contains NIL
*/

/**
 * Open Addressing
 * 
 * Unlike chaining, open addressing doesn't store multiple elements into the same slot. Here, each slot is either filled with a single key  or left NIL.
 * 
 * i. Linear Probing
 * In linear probing, collision is resolved by checking the next slot
 * h(k, i) = (h'(k) + i) mod m
 * 
 * where
 * i = { 0, 1, ... . }
 * h'(k) = auxiliary hash function
 * 
 * If a collision occurs at h(k, 0), then h(k, 1) is checked. If h(k, 1) is also occupied, then h(k, 2) is checked and so on (linearly).
 * 
 * The problem with linear probing is that a cluster of adjacent slots is filled. When inserting a new element, the entire cluster must be traversed. This adds to the the required to perform operations on the hash table
 * 
 * ii. Quadratic Probing
 * It works similar to linear probing but the spacing between the slots is increased (greater tha one) by using the following relation. 
 * 
 * h(k, i) = (h'(k) + c1i + c2i^2) mod m
 * 
 * where, c1 and c2 are positive auxiliary constants
 * i = { 0, 1, ... . }
 * 
 * iii. Double Hashing
 * If a collision occurs after applying a hash function h(k), then another hash function is calculated for finding the next slot.
 * 
 * h(k, i) = (h1 (k) + ih2 (k)) mod m
*/

/**
 * Good Hash Functions
 * 
 * A good hash function may not prevent the collisions completely however it can reduce the number of collisions.
 * 
 * Here, we will look into different methods to find a good hash function
 * 
 * 1. Division Method
 * If k is a key and m is the side of the hash table, the hash function h() is calculated as:
 * h(k) = k mod m
 * For example, if the side of a hash table is 10 and k = 112 then h(k) = 112 mod 10 = 2. The value of m must not be the powers of 2. This is because the powers of 2 in binary format are 10, 100, 1000, ... . When we find k mod m, we always get the lower order p-bits
 * 
 * if m = 22, k = 17, then h(k) = 17 mod 22 = 10001 mod 100 = 01
 * if m = 23, k = 17, then h(k) = 17 mod 22 = 10001 mod 100 = 001
 * if m = 24, k = 17, then h(k) = 17 mod 22 = 10001 mod 100 = 0001
 * if m = 2p, then h(k) = p lower bits of m
 * 
 * 2. Multiplication Method
 * h(k) = Lm(kA mod 1)⌋
 * 
 * Where,
 * 
 * kA mod 1 gives the fractional part kA,
 * ⌊ ⌋ gives the floor value
 * A is any constant. The value of A lies between 0 and 1. But, an optimal choice will be ≈ (√5-1)/2 suggested by Knuth.
 * 
 * 3. Universal Hashing
 * In Universal hashing, the has function is choses at random independent of keys. This is done by having a set of hash functions and selecting one of them randomly for each insertion.
*/

import java.util.*;

class HashTable {
    public static void main(String args[]) {
        Hashtable<Integer, Integer> ht = new Hashtable<Integer, Integer>();

        ht.put(123, 432);
        ht.put(12, 2345);
        ht.put(15, 5643);
        ht.put(3, 321);

        ht.remove(12);

        System.out.println(ht);
    }
}