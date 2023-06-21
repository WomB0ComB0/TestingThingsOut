def plus_one(digits):
    n = len(digits) # 3
    for i in range(n-1, -1, -1): # 2, 1, 0
        if digits[i] != 9: # 3 != 9, 2 != 9, 1 != 9
            digits[i] += 1 # digits[2] = 3, digits[1] = 2, digits[0] = 1
            return digits
        digits[i] = 0 # digits[2] = 0, digits[1] = 0, digits[0] = 0
    return [i] + digits # [1] + [0, 0, 0]
# print(plus_one([1,2,3]))

def target_sum(nums, target):
    num_dict = {}
    for i, num in enumerate(nums):
        complement = target - num # 9 - 2 = 7, 9 - 7 = 2, 9 - 11 = -2, 9 - 15 = -6
        if complement in num_dict: # 7 in num_dict, 2 in num_dict
            return [num_dict[complement], i] # [0, 1]
        num_dict[num] = i # num_dict[2] = 0, num_dict[7] = 1, num_dict[11] = 2, num_dict[15] = 3
    return []  # No solution found
# print(target_sum([2, 7, 11, 15], 9)) # [0, 1]