# Binary Search is a searching algorithm for finding an element's position in a sorted array or the middle element within an array.
# Alternatively, it can be used to determine if an element exists in a sorted array.
import timeit
from memory_profiler import profile

array: list[int] = [3, 4, 5, 6, 7, 8, 9]
x: int = 4

# (Iterative method)
def binarySearch(array: list[int], x: int, low: int, high: int) -> list[int]: # Binary Search
    # Repeat until the pointers low and high meet each other
    while (low <= high):
        # In python  low + (high - low) // 2 is used instead of (low + high) // 2 is used
        # this is because the latter can cause an overflow if the sum of low and high is greater than the maximum value that an integer can store.
        # 3) 3 // 2 -> 1, 4 // 2 -> 2
        # 0 + (8 - 0) // 2
        mid = low + (high - low) // 2
        
        # If element is present at mid, return it
        if (array[mid] == x):
            return [mid, array[mid]]
        # Else look in left or right half accordingly
        elif (array[mid] < x):
            low = mid + 1
        
        # If element is smaller than mid, then it can only be present in left sub-array
        else:
            high = mid - 1
            
    return -1  # This means the element is not present in the array

print("Binary Search (Iterative Method):")
result = binarySearch(array, x, 0, len(array)-1)
if result != -1:
    print(f"Element is present at index {str(result[0])}, value is {str(result[1])}")
else:
    print(f"Not found")

print(
    f"The execution time for the iterative method is {timeit.timeit(lambda: binarySearch(array, x, 0, len(array) - 1)).__round__(4)} seconds.",
    end="\n",
)

# (Recursive method)
def binarySearchRec(array: list[int], x: int, low: int, high: int) -> list[int]:
    if (high >= low):
        mid = low + (high - low) // 2
        # If found at mid, then return it
        if (array[mid] == x):
            return [mid, array[mid]]
        # Search the left half
        elif (array[mid] > x):
            return binarySearchRec(array, x, low, mid-1)
        # Search the right half
        else:
            return binarySearchRec(array, x, mid + 1, high)
    else:
        return -1


print("\nBinary Search (Recursive Method):")
if result != -1:
    print(f"Element is present at index {str(result[0])}, value is {str(result[1])}")
else:
    print(f"Not found")

print(
    f"The execution time for the recursive method is {timeit.timeit(lambda: binarySearchRec(array, x, 0, len(array) - 1)).__round__(4)} seconds.",
    end="\n\n",
)
