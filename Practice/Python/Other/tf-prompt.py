def binSearch(arr, target):
    # two pointer approach
    left, right = 0, len(arr) - 1
    # make sure that pointers do not cross each other
    while left <= right:
        # find the middle element, in Python this method is faster than (left + right) // 2
        # other programming languages may require the latter method
        mid = left + (right - left) // 2
        # if the middle element is the target, return the index
        if arr[mid] == target:
            return mid
        # if the middle element is less than the target, move the left pointer to the middle
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    # default return value if the target is not found
    return -1