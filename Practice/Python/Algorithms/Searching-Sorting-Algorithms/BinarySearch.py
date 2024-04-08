# Binary Search is a searching algorithm for finding an element's position in a sorted array.

import timeit

array = [3, 4, 5, 6, 7, 8, 9]
x = 4

# (Iterative method)
def binarySearch(array, x, low, high): # Binary Search
    # Repeat until the pointers low and high meet each other
    while low <= high:
        # In python  low + (high - low) // 2 is used instead of (low + high) // 2 is used
        # this is because the latter can cause an overflow if the sum of low and high is greater than the maximum value that an integer can store.
        
        # Find the mid index
        mid = low + (high - low)//2
        # If element is present at mid, return it
        if array[mid] == x:
            return mid
        # Else look in left or right half accordingly
        elif array[mid] < x:
            low = mid + 1
        # If element is smaller than mid, then it can only be present in left subarray
        else:
            high = mid - 1
    return -1 # This means the element is not present in the array

result = binarySearch(array, x, 0, len(array)-1)
if result != -1:
    print("Element is present at index " + str(result))
else:
    print("Not found")

# (Recursive method)
def binarySearchRec(array, x, low, high): # Binary Search
    if high >= low:
        mid = low + (high - low)//2
        # If found at mid, then return it
        if array[mid] == x:
            return mid
        # Search the left half
        elif array[mid] > x:
            return binarySearchRec(array, x, low, mid-1)
        # Search the right half
        else:
            return binarySearchRec(array, x, mid + 1, high)
    else:
        return -1

result2 = binarySearchRec(array, x, 0, len(array)-1)

if result2 != -1:
    print("Element is present at index " + str(result2))
else:
    print("Not found")

print(timeit.timeit(lambda: binarySearch(array, x, 0, len(array) - 1)))
print(timeit.timeit(lambda: binarySearchRec(array, x, 0, len(array) - 1)))