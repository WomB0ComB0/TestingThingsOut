# def getFinalString(s):
#     str = "AWS"
#     while str in s:
#         s = s.replace(str, "")
#     return -1 if s == "" else s
# print(getFinalString("AAWSWS"))

# import math
# def military_to_standard(hours, mins):
    # if hours > 12:
        # hours -= 12
        # return str(hours) + ":" + str(mins).zfill(2) + " PM"
    # elif hours == 12:
        # return str(hours) + ":" + str(mins).zfill(2) + " PM"
    # elif hours == 0:
        # hours += 12
        # return str(hours) + ":" + str(mins).zfill(2) + " AM"
    # else:
        # return str(hours) + ":" + str(mins).zfill(2) + " AM"
# print(military_to_standard(0, 0))

#def test(func, arg): # func = multiply, arg = 2
#    return func(func(arg)) # multiply(multiply(2)) = 16
#def multiply(x): # x = 2
#    return x * x # 2 * 2 = 4
# print(test(multiply, 2)) # test(multiply, 2) = 16

#def my_func(f, arg):
#	return f(arg)
#print(my_func(lambda x: 2*x*x, 5))

# def factorial(x):
    # if x == 1:
        # return 1
    # else:
        # return x * factorial(x-1)
# print(factorial(5))

# def calc(list):
    # if len(list)==0:
        # return 0
    # else:
        # return list[0]**2 + calc(list[1:])
# list = [1, 3, 4, 2, 5]
# x = calc(list)        
# print(x)
# from itertools import product
# a = {1,2}
# print(len(list(product(range(3),a))))

# def power(x, y):
    # if y == 0:
        # return 1
    # else:
        # return x * power(x, y-1)
# print(power(2, 3))

# num = int(input())
# def fib(n):
    # if n == 0:
        # return 0
    # elif n == 1:
        # return 1
    # else:
        # return fib(n-1) + fib(n-2)
# print(fib(num))

# num = int(input())
# def fibonacci(n):
	# if n == 0:
		# return []
	# elif n == 1:
		# return [0]
	# elif n == 2:
		# return [0,1]
	# else:
		# sequence = fibonacci(n-1)
		# sequence.append(sequence[-1]+sequence[-2])
		# return sequence
# fib_sequence = fibonacci(num)
# for number in fib_sequence:
	# print(number)
# def spiralTraverse(array):
    # traversedArray = []
    # while array: # while array is not empty
        # traversedArray += array.pop(0) # pop the first row and add it to traversedArray
        # .pop(0) removes the first element of the array and returns ite
        # array = list(zip(*array))[::-1] #  rotate the remaining array clockwise
    # return traversedArray
# scores = [12, 20, 10, 24]
# def breakingRecords(scores):
    # minMax = [0,0]
    # minScore, maxScore = scores[0], scores[0]
    # for i in range(len(scores)):
        # if scores[i] < minScore:
            # minScore = scores[i]
            # minMax[1] += 1
        # elif scores[i] > maxScore:
            # maxScore = scores[i]
            # minMax[0] += 1
    # return minMax
# print(breakingRecords(scores))
# Find individual lengths of each subarray in a 2D array
# def findLengths(array):
    # lengths = []
    # for i in range(len(array)):
        # lengths.append(len(array[i]))
    # return lengths
# print(findLengths([[1,2,3],[4,5],[6,7,8,9]]))
# Find the sum of each subarray in a 2D array
# def findSums(array):
    # sums = []
    # for i in range(len(array)):
        # sums.append(sum(array[i]))
    # return sums
# print(findSums([[1,2,3],[4,5],[6,7,8,9]]))
# Find the sum of each subarray in a 2D array and return the sum of the sums
# def findSumOfSums(array):
    # sums = []
    # for i in range(len(array)):
        # sums.append(sum(array[i]))
    # return sum(sums)
# print(findSumOfSums([[1,2,3],[4,5],[6,7,8,9]]))

# data = [
#   [23, 11, 5, 14],
#   [8, 32, 20, 5]
# ]
# color = input()
# sums = []
# def findSumOfSums(data):
#   for i in range(len(data)):
    #   sums.append(sum(data[i]))
#   return sum(sums)
# total = findSumOfSums(data)
# if color == "brown":
    # print(int((data[0][0] + data[1][0])*100/total))
# elif color == "blue":
    # print(int((data[0][1]+data[1][1])*100/total))
# elif color == "green":
    # print(int((data[0][2]+data[1][2])*100/total))
# else:
    # print(int((data[0][3]+data[1][3])*100/total))

# x=[1,2,3,4,5,6]
# x.append(8)
# x.insert(0, 0)
# x.remove(2)
# print(len(x))

# prices = [125000, 78000, 110000, 65000, 300000, 250000, 210000, 150000, 165000, 140000, 125000, 85000, 90000, 128000, 230000, 225000, 100000, 300000]
# average = int(sum(prices) / len(prices))
# count = 0
# for i in range(len(prices)):
    # if prices[i] > average:
        # count += 1
# print(count)

# insects = [n*2**i for i in range(12)]

# nums = (55, 44, 33, 22)
# print(max(min(nums[:2]), abs(-42)))

# text = input()
# print((sum(len(word) for word in text.split()))/len(text.split()))

# contacts = { "David": ["123-321-88", "david@test.com"], "James": ["241-879-093", "james@test.com"], "Bob": ["987-004-322", "bob@test.com"], "Amy": ["340-999-213", "a@test.com"] }
# name = input()
# if name in contacts:
    # print(contacts[name][1])
# else:
    # print("Not found")
# name = input()
# if name in contacts:
    # print(contacts[name][1])
# else:
    # print("Not found")

# fib = {1: 1, 2: 1, 3: 2, 4: 3}
# print(fib.get(4, 0) + fib.get(7, 5))

# distance = list(range(len(points)))
# z = 0
# for (x, y) in points:
    # distance[z] = (x**2 + y**2)**0.5
    # z += 1
# print(min(distance))

# list1 = s1.split()
# list2 = s2.split()
# print(len(set(list1) & set(list2)))
# 
# n = p.head
# while n != None:
    # print(n.title)
    # n = n.next
# a = 0
# for i in range(len(x.adj)):
    # if i+1==n:
        # for j in x.adj[i]:
            # if j==1:
                # a+=1
# matrix = [[1,2,3,4],[5,6,7,8]]
# print(len(matrix[0]))

# def standard_to_military(hours, time_of_day):
    # if time_of_day == "AM":
        # if hours == 12:
            # return 0
        # else:
            # return hours
    # else:
        # if hours == 12:
            # return 12
        # else:
            # return hours + 12

# def rotate_right(num_list):
#     return num_list[-1:] + num_list[:-1]
# print(rotate_right([1,2,3,4,5]))

# def rotate_element(num_list, k):
    # if len(num_list) == 0:
        # return num_list
    # if k > 0:
        # for i in range(k):
            # last_value = num_list[-1]
            # num_list.insert(0, last_value)
            # num_list.pop()
    # return num_list
# print(rotate_element([1,2,3,4,5], 3))

# def majorityElement(array):
    # current_max = 0
    # if range(len(array)):
        # return array[0]
    # for i in range(len(array)):
        # temp = array.count(array[i])
        # if temp > current_max:
            # current_max = temp
    # return current_max

# class BST:
    # def __init__(self, value):
        # self.value = value
        # self.left = None
        # self.right = None
# def validateBst(tree):
    # return validateBstHelper(tree, float("-inf"), float("inf")) # -inf and inf are the smallest and largest numbers possible
# def validateBstHelper(tree, minValue, maxValue):
    # if tree is None: # if tree is empty
        # return True
    # if tree.value < minValue or tree.value >= maxValue: # if tree value is less than min or greater than or equal to max
        # return False
    # leftIsValid = validateBstHelper(tree.left, minValue, tree.value) # check left side of tree
    # return leftIsValid and validateBstHelper(tree.right, tree.value, maxValue) # check right side of tree

# def mystery(s):
    # prt1 = 0 
    # prt2 = 3
    # lst = []
    # while prt2 <= len(s):
        # sub = s[prt1:prt2]
        # if sub not in lst:
            # lst.append(sub)
        # prt1 += 1
        # prt2 += 1
    # return lst
# print(mystery("ababababa"))

# def mystery(nums):
    # if len(nums) == 0:
        # return 0
    # i = 0
    # for j in range(1, len(nums)):
        # if nums[j] != nums[i]:
            # i += 1
            # nums[i] = nums[j]
    # return i + 1
# print(mystery([1,1,2]))
# def first_palindrome(words):
    # for string in range(len(words)):
        # if words[string] == words[string][::-1]:
            # return  words[string]
    # return ""
# print(first_palindrome(["def", "ghi"]))

# def subarray_sum(nums, target):
    # n = len(nums)
    # if n < 3:
        # return []
    # window_sum = sum(nums[:3])
    # if window_sum == target:
        # return nums[:3]
    # for i in range(3, n):
        # window_sum += nums[i] - nums[i - 3]
        # if window_sum == target:
            # return nums[i - 2:i + 1]
    # return []
# print(subarray_sum([0, 5, -7, 1, -2, 7, 6, 1, 4, 1, 10], 15))
# import random
# s = "aba"
# s.replace(random(0,len(s)),'')
# print(s)

# import random
# def palindrome_del(s):
    # s = ''.join([s[i] for i in range(len(s)) if i != random.randint(0, len(s) - 1)])
    # return s == s[::-1]
# print(palindrome_del("aba"))

# import math

# def approximate(x, dx):
#   """Approximates the quantity of x ^ 1/3."""
#   dy = (1/3) * x ** (-2/3) * dx
#   return x ** (1/3) + dy
# 
# print(approximate(107.5, 0.1))

# import math
# print(math.floor(107.5))

# d = { "a": 'b', "b": 'c', "c": 'a' }
# for x, y  in d.items():
#     print(x, y, d[x], d[y])
# print(d.items())
# inventory = {"banana": 6, "apple": 0, "orange": 32, "pear": 15}
# inventory = {'bananas': 5, 'apples': 3, 'cherries': 100}
# def maximum_count(inventory):
    # max = 0
    # for x in inventory:
        # if inventory[x] > max:
            # max = inventory[x]
        # elif inventory[x] == max:
            # max = inventory[x]
    # return inventory.keys(max)
# print(maximum_count(inventory))

# inventory = {"banana": 5, "apple": 3, "orange": 10, "bacon": 1, "sausages": 13}
# def low_inventory(inventory, threshold):
    # value_list = []
    # for key, value in inventory.items():
        # if value <= threshold:
            # value_list.append(key)
    # return value_list
# print(low_inventory(inventory, 3))

# def category_total(inventory, categories, category):
    # total = 0
    # for key, value in inventory.items():
        # if key in categories[category]:
            # total += value
    # return total

# def most_common_first_letter(word_list):
    # first_letters = [word[0] for word in word_list]
    # return max(set(first_letters), key=first_letters.count)
# print(most_common_first_letter(["cat","bat", "rat", "bar", "car", "can"]))

# opened = ["[","{","("]
# closed = ["]", "}",")"]
# def balanced_symbols(s):
#   stack = []
#   for i in s:
    # if i in opened:
    #   stack.append(i)
    # elif i in closed:
    #   pos = closed.index(i)
    #   if ((len(stack) > 0) and (opened[pos] == stack[len(stack) -1])):
        # stack.pop()
    #   else:
        # return False
#   if len(stack) == 0:
    # return True
#   else:
    # return False
# s = "{[]{()}}"
# print(balanced_symbols(s))
# O(n) Time

# def unique(my_list):
    # my_dict = {}
    # for item in my_list:
        # if item in my_dict:
            # my_dict[item] += 1
        # else:
            # my_dict[item] = 1
    # return my_dict.keys()
# print(unique([1,2,3,3,2,1,0]))

# k = 14
# costs = [2, 4, 1, 8, 6]
# def maximumPoints(k, costs):
    # n = len(costs)
    # max_points = 0
    # total_cost = 0
    # skipped = False
    # skip_index = -1
    # for i in range(n):
        # total_cost += costs[i]
        # while total_cost > k and not skipped:
            # total_cost -= costs[skip_index + 1]
            # skip_index += 1
            # skipped = True
        # max_points = max(max_points, i - skip_index)
    # return max_points
# print(maximumPoints(k, costs))

# def find_anagrams(word_list):
    # my_dict = {}
    # for word in word_list:
        # srt_letters = ''.join(sorted(word))
        # if srt_letters in my_dict:
            # my_dict[srt_letters].append(word)
        # else:
            # my_dict[srt_letters] = [word]
    # for key, words in my_dict.items():
        # if len(words) >= 2:
            # return [words[0], words[1]]
    # return []
# print(find_anagrams(["cat", "dog", "tac", "god", "act"]))
# def consecutive(list):
#   l, r = 0, 1
#   count = 0
#   while l < r:
    # if list[l] == list[r]:
    #   l += 1
    #   r += 1
    #   count += 1
    # elif list[l] != list[r]:
        # l += 1
        # r += 1
    # return count
# print(consecutive([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]))

# def total_inventory(dict1,dict2):
    # total = 0
    # for key in dict1: # for each key in dict1
        # total += dict1[key] # add the value of the key to total
    # for key in dict2: # for each key in dict2
        # total += dict2[key] # add the value of the key to total
    # return total
# print(total_inventory({'pencil': 10, 'pen': 8, 'paper': 7}, {'pencil': 11, 'pen': 12, 'paper': 13}))

# def translate(list,dic):
    # translatedList = []
    # for i in list: # for each element in list
        # translatedList.append(dic[i]) # append the value of the element to translatedList
    # return translatedList
# print(translate(['cat', 'dog', 'walrus'], {0: 'dog', 1: 'walrus', 2: 'cat'}))
# def roman_nums(input):
    # roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    # total = 0
    # for i in range(len(input)):
        # value = roman[input[i]] # value = roman['I'] = 1
        # if i+1 < len(input) and roman[input[i+1]] > value: # if next value is > current value
            # total -= value
        # else: # if the next value is not greater than the current value
            # total += value
    # return total
# print(roman_nums('III'))
# print(roman_nums('LVIII'))
# print(roman_nums('MMXXIII'))

# capitals = {
    # "France": "Paris",
    # "Netherlands": "Amsterdam",
    # "Germany": "Berlin",
    # "Switzerland": "Bern",
# }
# Printing just the keys
# for country in capitals.keys():
    # print(country)
#  Printing just the values
# for capital in capitals.values():
    # print(capital)
# Printing both keys and values
# for country, capital in capitals.items():
    # print(country, capital)
# Printing the keys and values in a formatted string
# for country, capital in capitals.items():
    # print("The capital of " + country + " is " + capital + ".")

# words = ["apple", "apple", "banana", "apple", "orange", "banana", "pear", "banana"]
# def word_freq(words):
    # output = {}
    # for word in words:
        # if not(word in output):
            # output[word] = 1
        # else:
            # output[word] += 1
    # return output
# print(word_freq(words))

# This is from the Leetcode problem 34. Find First and Last Position of Element in Sorted Array
# class Solution:
    # def searchRange(self, nums: List[int], target: int) -> List[int]:
        # low, high = 0, len(nums)-1
        # while low <= high:
            # mid = (low + high)//2
            # if nums[mid] == target:
                # return [self.find_left(nums, target, low, mid), self.find_right(nums, target, mid, high)]
            # elif nums[mid] < target:
                # low = mid + 1
            # else:
                # high = mid - 1
        # return [-1, -1]
    # def find_left(self, nums, target, low, high):
        # while low < high:
            # mid = (low + high)//2
            # if nums[mid] == target:
                # high = mid
            # else:
                # low = mid + 1
        # return low
    # def find_right(self, nums, target, low, high):
        # while low < high:
            # mid = (low + high)//2 + 1
            # if nums[mid] == target:
                # low = mid
            # else:
                # high = mid - 1
        # return low
# Itterative
# def factorial(n):
    # result = 1
    # for i in range(n, 1, -1):
        # result *= i
    # return result
# print(factorial(0))
# print(factorial(1))
# print(factorial(3))
# print(factorial(5))

# Recursive
# def factorial(n):
    # if n < 2:
        # return 1
    # else:
        # return n * factorial(n-1) # multiply n by the factorial of n-1, because n! = n * (n-1)!
    # Because its recursive, it will keep calling itself until n == 0 or n == 1
# print(factorial(0))
# print(factorial(1))
# print(factorial(3))
# print(factorial(5))

# def are_anagrams(word1, word2):
#   firstWord = set()
#   secondWord = set()
  
#   for word in word1:
#     firstWord.add(word)
#   for word in word2:
#     secondWord.add(word)
    
#   return firstWord == secondWord 

# print(are_anagrams("dad","add")) # True
# print(are_anagrams("boy","girl")) # False
# print(are_anagrams("lady","bird")) # False
# print(are_anagrams("not","ton")) # True

# def palindrome(s):
#   return s == s[::-1]
# print(palindrome("dad"), ": This is the function palindrome")

# def palindrome_r(s):
#   if len(s) <= 1:
#     return True
#   if s[0] == s[-1]:
#     return palindrome_r(s[1:-1])
#   else:
#     return False
# print(palindrome_r("dad"), ": This is the function palindrome_r")

# def double_sum(nums):
    # current_sum = 0
    # for i in range(0, len(nums)):
        # current_sum += 2 * nums[i]
    # return current_sum
# print(double_sum([4, 2, 10, 5])) # 42, because (4*2) + (2*2) + (10*2) + (5*2) = 42

# a = 12
# b = 8
# while a > b:
    # a -= 2
    # print(a, b)
    # b -= 1
    # print(a - 1, b)

# def abracadabra(head):
    # list = head
    # while list:
        # if(list.next == None):
            # break
        # if (list.val == list.next.val):
            # list.next = list.next.next
        # else:
            # list = list.next
    # return head
# print(abracadabra([1,2,2,3,4,5,5, 6, 7]))

# A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# print(A[1][2])

# def maximumOccurringCharacter(text):
    # result = {}
    # for i in text:
        # if i in result:
            # result[i] += 1
        # else:
            # result[i] = 1
    # return max(result, key=result.get)
# print(maximumOccurringCharacter("abbbaacc"))

# def maxDifference(px):
    # l, r = 0, 1
    # max_diff = px[r] - px[l]
    # while r < len(px):
        # if px[l] > px[r]:
            # l = r
        # else:
            # max_diff = max(max_diff, px[r] - px[l])
        # r += 1
    # return max_diff
# print(maxDifference([7, 1, 2, 5]))

# def maxSubsetSumNoAdjacent(array):
#     filtered = []
#     if not array:
#         return 0
#     elif len(array) == 2:
#         return max(array)
#     for i in range(0, len(array)):
#         if not(i in filtered):
#             filtered.append(array[i])
    
# def maxSubsetSumNoAdjacent(array):
    # if not array:
        # return 0
    # elif len(array) == 1:
        # return array[0]
    # maxSums = array[:]
    # maxSums[1] = max(array[0], array[1])
    # for i in range(2, len(array)):
        # maxSums[i] = max(maxSums[i-1], maxSums[i-2] + array[i])
    # return maxSums[-1]
# print(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])) # 330


# def maxSubArray(nums):
    # maxSum = nums[0]
    # currSum = 0
    # for i in range(0, len(nums)):
        # if currSum < 0:
            # currSum = 0
        # currSum += nums[i]
        # maxSum = max(maxSum, currSum)
    # return maxSum
# print(maxSubArray([1,2,3,4,5,6,7,8,9,10])) # 55

# import math
# print(math.ceil(1905/100))

# array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# print(len(array))

# def solution(inputArray):
    # result = []
    # for i in range(len(inputArray) - 1):
        # result.append(inputArray[i] * inputArray[i + 1])
    # return max(result)
# print(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]))

# Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

# def solution(statues):
    # count = 0
    # statues.sort()
    # for i in range(len(statues) - 1):
        # if statues[i] + 1 != statues[i + 1]:
            # count += statues[i + 1] - statues[i] - 1
    # return count
# print(solution([6, 2, 3, 8])) # 3

# def solution(sequence):
    # dropped = False
    # last = prev = min(sequence) - 1
    # for elm in sequence:
        # if elm <= last:
            # if dropped:
                # return False
            # else:
                # dropped = True
            # if elm <= prev:
                # prev = last
            # elif elm >= prev:
                # prev = last = elm
        # else:
            # prev, last = last, elm
    # return True

# Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
# def solution(matrix):
    # rows = len(matrix)
    # cols = len(matrix[0])
    # result = 0
    # for col in range(cols):
        # for row in range(rows):
            # if matrix[row][col] == 0:
                # continue
            # else:
                # result += matrix[row][col]
    # return result
# print(solution([[0, 1, 1, 2], 
        #   [0, 5, 0, 0], 
        #   [2, 0, 3, 3]]))
# def powerset(array):
    # """
    # Generates the powerset of a given array.
    # The powerset of a set is the set of all possible subsets, including the empty subset and the set itself.
    # Parameters:
    # array (list): The input list for which the powerset needs to be generated.
    # Returns:
    # list: A list of lists representing the powerset of the input array.
    # """
    # subsets = [[]]  # Initialize the powerset with the empty subset
    # for ele in array: # For each element in the input array
        # for i in range(len(subsets)): # For each subset in the powerset
            # currentSubset = subsets[i] # Get the current subset
            # subsets.append(currentSubset + [ele])  # Add a new subset with the current element
    # return subsets
# print(powerset([1, 2, 3])) # [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]