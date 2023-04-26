# Linear Search in Python
# A Linear Search is a searching algorithm that is used to find whether a given value is present in an array or not.
def linearSearch(array, n, x): # Function to implement Linear Search
    # Going through array sequencially
    for i in range(0, n):
        if (array[i] == x):
            return i
    return -1
array = [2, 4, 0, 1, 9]
x = 1
n = len(array)
result = linearSearch(array, n, x)
if(result == -1):
    print("Element not found")
else:
    print("Element found at index: ", result)