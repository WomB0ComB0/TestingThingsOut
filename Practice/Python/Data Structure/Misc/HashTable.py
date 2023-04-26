# Python program to demonstrate working of HashTable 
# A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array in which an element will be inserted or searched. By using this hash function we can search a key in O(1) time in the average case.
hashTable = [[],] * 10
def checkPrime(n): # Check if a number is prime
    if n == 1 or n == 0:
        return 0
    for i in range(2, n//2):
        if n % i == 0:
            return 0
    return 1
def getPrime(n): # Get the prime number just greater than the given number
    if n % 2 == 0:
        n = n + 1
    while not checkPrime(n):
        n += 2
    return n
def hashFunction(key): # Remainder Method
    capacity = getPrime(10)
    return key % capacity
def insertData(key, data): # Insert "data" into hash table at "key" index
    index = hashFunction(key)
    hashTable[index] = [key, data]
def removeData(key): # Remove a key from the hash table
    index = hashFunction(key)
    hashTable[index] = 0

insertData(123, "apple")
insertData(432, "mango")
insertData(213, "banana")
insertData(654, "guava")

print(hashTable)

removeData(123)

print(hashTable)