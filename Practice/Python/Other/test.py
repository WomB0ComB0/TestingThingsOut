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

# def test(func, arg): # func = multiply, arg = 2
#    return func(func(arg)) # multiply(multiply(2)) = 16
# def multiply(x): # x = 2
#    return x * x # 2 * 2 = 4
# print(test(multiply, 2)) # test(multiply, 2) = 16

# def my_func(f, arg):
# 	return f(arg)
# print(my_func(lambda x: 2*x*x, 5))

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
# def fib(n: int) -> int:
#   if n == 0:
#     return 0
#   elif n == 1:
#     return 1
#   else:
#     return fib(n-1) + fib(n-2)
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

# a, b, c, d, *e, f, g = range(20) # *e = 3,4,5,6,7,8,9,10,11,12,13,14
# print(len(e)) # 14

# for i in range(10): # 0,1,2,3,4,5,6,7,8,9
# if i > 5:
# print(i)
# break
# else:
# print("7")

# try:
# print(1)
# print(1+ "1" == 2)
# print(2)
# except TypeError:
# print(3)
# else:
# print(4)

# for i in range(10):
#     try:
#         if 10 / i == 2.0:
#             break
#     except ZeroDivisionError:
#         print(1)
#     else:
#         print(2)

# join() # join() is a string method that takes a list of strings as an argument, and returns a string consisting of the list elements joined by a separator string.

# import pandas as pd

# df1 = pd.DataFrame({'key': ['A', 'B', 'C', 'D'],
#                     'value1': [1, 2, 3, 4]})
# print(df1)
# df2 = pd.DataFrame({'key': ['B', 'D', 'E', 'F'],
#                     'value2': [5, 6, 7, 8]})
# print(df2)
# merged_df = pd.merge(df1, df2, on='key', how='outer')

# print(merged_df)


# print(merged_df)

# from collections import defaultdict
# import heapq
# from typing import List

# class FoodRatings:
#     def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
#         self.cuisine_to_heap = defaultdict(list)
#         self.food_to_cuisine = {}
#         self.food_to_rating = defaultdict(int)
#         for i in range(len(foods)):
#             self.food_to_cuisine[foods[i]] = cuisines[i]
#             heapq.heappush(self.cuisine_to_heap[cuisines[i]], (-ratings[i], foods[i]))
#             self.food_to_rating[foods[i]] = -ratings[i]

#     def changeRating(self, food: str, newRating: int) -> None:
#         cuisine = self.food_to_cuisine[food]
#         heapq.heappush(self.cuisine_to_heap[cuisine], (-newRating, food))
#         self.food_to_rating[food] = -newRating

#     def highestRated(self, cuisine: str) -> str:
#         smallest_lexico = None
#         while len(self.cuisine_to_heap[cuisine]) > 0:
#             curr = self.cuisine_to_heap[cuisine][0]
#             if curr[0] != self.food_to_rating[curr[1]]:
#                 heapq.heappop(self.cuisine_to_heap[cuisine])
#                 continue
#             smallest_lexico = curr[1]
#             break
#         return smallest_lexico

# print()

# var1 = "THIS"
# length = len(var1)
# for i in range(length):
#     print(var1[i], end=" ")

# var2 = set(var1)
# print(var2)


# st = time.time()

# nums = [0, 1, 0, 3, 12]

# nums = [0, 1, 0, 3, 12]

# def moveZeroes(nums: List[int]) -> None:
#     left, right = 0, len(nums) - 1
#     while left < right:
#         if nums[left] == 0:
#             nums.pop(left)
#             nums.append(0)
#             right -= 1
#         else:
#             left += 1
#     print(nums)
# moveZeroes(nums)
# et = time.time()
# print(et - st, "seconds\n")


# st = time.time()

# nums = [0, 1, 0, 3, 12]

# def moveZeroes1(nums: List[int]) -> None:
#     non_zero = 0

#     for current in range(len(nums)):
#         if nums[current] != 0:
#             nums[non_zero], nums[current] = nums[current], nums[non_zero]
#             non_zero += 1
#     print(nums)
# moveZeroes1(nums)
# et = time.time()
# print(et - st, "seconds")

# from typing import List
# import time

# st = time.time()
# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# k = 3


# def findMaxAverage(nums: List[int], k: int) -> float:
#     currSum = maxSum = sum(nums[:k])
#     for i in range(k, len(nums)):
#         currSum += nums[i] - nums[i - k]
#         maxSum = max(maxSum, currSum)
#     return maxSum / k


# result = findMaxAverage(nums, k)
# print(result)
# et = time.time()
# print(et - st, "seconds")

# from typing import List
# import collections
# class Solution:
#     def majorityElement(self, nums: List[int]) -> int:
#         res = collections.Counter(nums)
#         if len(nums)== 1:
#             return nums[0]
#         return max(res, key=res.get)
# solution = Solution()
# print(solution.majorityElement([3,2,3])) # 3
# stack = []

# while True:
#     # Read a character
#     char = input("Enter a character (or press Enter to finish): ")

#     # If the character is '(', push it on the stack
#     if char == "(":
#         stack.append(char)
#     # If the character is ')' and the stack is not empty, pop from the stack
#     elif char == ")" and stack:
#         stack.pop()
#     # If the character is ')' and the stack is empty, print "unbalanced" and exit
#     elif char == ")" and not stack:
#         print("unbalanced")
#         break

# If the stack is empty, print "balanced"; otherwise, print "unbalanced"
# if not stack:
#     print("balanced")
# else:
#     print("unbalanced")


# class CamelCase:
#     def __init__(self, input: str):
#         self.input = input

#     def encode(self) -> str:
#         words = self.input.split()
#         for i in range(len(words)):
#             words[i] = words[i][0].upper() + words[i][1:].lower()
#         words[0] = words[0].lower()
#         return "".join(words)

#     def decode(self) -> str:
#         res = []
#         for i in range(len(self.input)):
#             if self.input[i].isupper():
#                 res.append(" ")
#             res.append(self.input[i])
#         return "".join(res).strip().casefold().capitalize()
# camel_instance = CamelCase("The quick brown fox jumps over the lazy dog")
# camel_instance2 = CamelCase("theQuickBrownFoxJumpsOverTheLazyDog")
# print(camel_instance.encode())
# print(camel_instance2.decode())


# def drawTree(height: int) -> str:
#     result = ""
#     for i in range(height):
#         result += " " * (height - i - 1) + "*" * (2 * i + 1) + "\n"
#     return result
# print(drawTree(5))


# class Solution:
#     def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
#         count = {0: 1}
#         cur_sum, total_sub = 0, 0
#         for num in nums:
#             cur_sum += num
#             if cur_sum - goal in count:
#                 total_sub += count[cur_sum - goal]
#             count[cur_sum] = count.get(cur_sum, 0) + 1
#         return total_sub


# def two_out_of3(a: bool, b: bool, c: bool) -> bool:
#     res = [int(a), int(b), int(c)]
#     return True if sum(res) == 2 else False

# print(two_out_of3(True, True, True)) # True

# def next_palindrome(a: int) -> int:
#     a += 1
#     while str(a) != str(a)[::-1]:
#         a += 1
#     return a

# print(next_palindrome(99)) # 101

# def all_digits_even(k: int) -> bool:
#     k = list(str(k))
#     res =  [char for char in k if int(char) % 2 == 0]
#     return True if len(res) > 0 else False
# print(all_digits_even(12))


# def factorial(d: int) -> int:
#     if d == 0:
#         return 1
#     if d == 1:
#         return 1
#     return d * (factorial(d - 1))

# def is_strong(n: int) -> bool:
#     n = list(str(n))
#     res = [factorial(int(strong)) for strong in n]
#     return True if sum(res) == int("".join(n)) else False

# def next_leap_year(yyyy: int) -> int:
#     return yyyy + 4 - yyyy % 4


# def num_digits(p: int) -> int:
#     return len(list(str(p)))


# print(num_digits(123))


# def is_armstrong(n: int) -> bool:
#     n = list(str(n))
#     res = [pow(int(armstrong), 3) for armstrong in n]
#     return sum(res) == int("".join(n))


# print(is_armstrong(153))


# class Classification(enumerate):
#     abundant = "abundant"
#     perfect = "perfect"
#     deficient = "deficient"


# def classify(k: int) -> int:
#     res = sum([i for i in range(1, k) if k % i == 0])
#     if res == k:
#         return Classification.perfect
#     elif res > k:
#         return Classification.abundant
#     else:
#         return Classification.deficient


# print(classify(12))  # abundant
# print(classify(6))  # perfect
# print(classify(8))  # deficient
# print(classify(28)) # perfect
#     return yyyy + 4 - yyyy % 4from functools import reduce
# class Solution:
#     def productExceptSelf(self, nums: List[int]) -> List[int]:
#         res = []
#         n = len(nums)
#         left_products = [1] * n
#         right_products = [1] * n
#         res = [1] * n

#         for i in range(1, n):
#             left_products[i] = left_products[i - 1] * nums[i - 1]

#         for i in range(n - 2, -1, -1):
#             right_products[i] = right_products[i + 1] * nums[i + 1]
#         for i in range(n):
#             res[i] = left_products[i] * right_products[i]
#         # print(reduce((lambda x, y: x * y),nums)) -> cummulative product of list
#         return res


# def double_it(n: int) -> int:
#     while n <= 100:
#         n *= 2
#         print(n)

# print(double_it(2))


# def main():
#     dictionary = dict()
#     dictionary["learning"] = "awesome"
#     dictionary["coding"] = "fun"
#     dictionary["learn"] = "awesome"
#     dictionary["code"] = "fun"

#     dictionary = remove_keys_containing_string(dictionary, "learn")
#     print(dictionary)

# def remove_keys_containing_string(dictionary: dict, remove: str):
#     new_dictionary = dict()
#     for key in dictionary.keys():
#         if remove not in key:
#             new_dictionary[key] = dictionary[key]
#     return new_dictionary

# main()


# Fill Karel

# from stanfordkarel import (
#     move,
#     right_is_clear,
#     facing_east,
#     turn_left,
#     right_is_blocked,
#     not_facing_east,
#     put_beeper,
#     beepers_present,
#     facing_west,
#     pick_beeper,
#     no_beepers_present,
#     not_facing_west,
#     front_is_clear,
#     beepers_in_bag,
#     facing_south,
#     front_is_blocked,
#     no_beepers_in_bag,
#     not_facing_south,
#     left_is_clear,
#     facing_north,
#     left_is_blocked,
#     run_karel_program,
# )

# from karel.stanfordkarel import *


# def main():
#     fill_world()


# def fill_world():
#     while front_is_clear():
#         fill_row()
#         move_to_next_row()


# def fill_row():
#     while front_is_clear() or no_beepers_present():
#         put_beeper()
#         if front_is_clear():
#             move()


# def move_to_next_row():
#     turn_left()
#     turn_left()
#     while beepers_present():
#         move()
#         if front_is_blocked() and facing_west():
#             turn_right()


# def turn_right():
#     turn_left()
#     turn_left()
#     turn_left()


# if __name__ == "__main__":
#     run_karel_program()

# from typing import List
# class Solution:
#     def findMaxLength(self, nums: List[int]) -> int:
#         N = len(nums)

#         first = {}

#         current = 0
#         longest = 0

#         first[current] = 0
#         for i in range(N):
#             if nums[i] == 0:
#                 nums[i] = -1
#             current += nums[i]
#             if current in first:
#                 longest = max(longest, i + 1 - first[current])
#             else:
#                 first[current] = i + 1
#         return longest

# import collections
# import heapq
# import string
# class Solution:
#     def minimizeStringValue(self, s: str) -> str:
#         f = collections.Counter(s)
#         h = []
#         for c in string.ascii_lowercase:
#             heapq.heappush(h,  (f[c], c))
# class Solution:
# def minimizeStringValue(self, s: str) -> str:
# f = Counter(s)
# h = []
# for c in string.ascii_lowercase:
# heapq.heappush(h,  (f[c], c))
#
# q = []
# ans = []
#
# for c in s:
# if c == "?":
# count, now = heapq.heappop(h)
# q.append(now)
# heapq.heappush(h, (count + 1, now))
# q.sort()
# q = collections.deque(q)
# for c  in s:
# if c == "?":
# ans.append(q.popleft())
# else:
# ans.append(c)
# return "".join(ans)
# first[current] = i + 1
# return longest

# class Solution:
# def findMinArrowShots(self, points: List[List[int]]) -> int:
# N = len(points)
#
# START, END = 0, 1
# events = []
# for index, (s, e) in enumerate(points):
# events.append((s, START, index))
# events.append((e, END, index))
# events.sort()

# bursted = [False] * N
# current = set()
# shots = 0

# for x, t, index in events:
# if t == START:
# current.add(index)
# else:
# if bursted[index]:
# continue
# shots += 1
# for c in current:
# bursted[c] = True
#
# return shots
#
# class Solution:
# def findMinArrowShots(self, points):
# points.sort(key = lambda x: x[1])
#
# total, end_point = 0, float("-inf")
#
# for i in points:
# if i[0] > end_point:
# total += 1
# end_point = i[1]
#
# return total
# import collections
# import heapq
# import string
# class Solution:
#     def minimizeStringValue(self, s: str) -> str:
#         f = collections.Counter(s)
#         h = []
#         for c in string.ascii_lowercase:
#             heapq.heappush(h,  (f[c], c))

#         q = []
#         ans = []

#         for c in s:
#             if c == "?":
#                 count, now = heapq.heappop(h)
#                 q.append(now)
#                 heapq.heappush(h, (count + 1, now))
#         q.sort()
#         q = collections.deque(q)
#         for c  in s:
#             if c == "?":
#                 ans.append(q.popleft())
#             else:
#                 ans.append(c)
#         return "".join(ans)

# from typing import List


# class Solution:
#     def findMaxLength(self, nums: List[int]) -> int:
#         N = len(nums)

#         first = {}

#         current = 0
#         longest = 0

#         first[current] = 0
#         for i in range(N):
#             if nums[i] == 0:
#                 nums[i] = -1
#             current += nums[i]
#             if current in first:
#                 longest = max(longest, i + 1 - first[current])
#             else:
#                 first[current] = i + 1
#         return longest


# def is_curzon(num: int) -> bool:
#     return (pow(2, num) + 1) % ((2 * num) + 1) == 0


# print(is_curzon(5))  # True


# def is_valid_triangle(side1: int, side2: int, side3: int) -> bool:
#     return (side1 + side2) > side3


# def is_circularprime(num: int) -> bool:
#     num = list(str(num))
#     N = len(num)
#     def is_prime(num: int) -> bool: ⭐
#         if num < 2:
#             return False
#         for i in range(2, num):
#             if num % i == 0:
#                 return False
#         return True
#     for _ in range(N, -1, -1):
#         curr_num = int("".join(num))
#         if is_prime(curr_num):
#             num = num[-1:] + num[:-1]
#         else:
#             return False
#     return True

# print(is_circularprime(1193))  # True


# def biggest_prime_of_eight_digit_number(num: int) -> int:
#     def is_prime(num: int) -> bool:
#         if num < 2:
#             return False
#         for i in range(2, num):
#             if num % i == 0:
#                 return False
#         return True

#     num = list(str(num))
#     num.sort(reverse=True)
#     N = len(num)
#     res = []
#     for i in range(N):
#         if is_prime(int(num[i])):
#             res.append(num[i])
#     return int("".join(res))


# How does the is_prime function determine if a number is prime?

# from typing import List
# def kaprekar_seq(n: int) -> List[int]:
#     n = sorted(str(n), reverse=True)
#     n2 = sorted(n, reverse=False)
#     book = []
#     if n == n2:
#         return book.append(int("".join(n)))
#     book.append(int("".join(n)))
#     product = 0
#     while product != 6174:
#         product = int("".join(n)) - int("".join(n2))
#         n = sorted(str(product), reverse=True)
#         n2 = sorted(n, reverse=False)
#         book.append(product)
#     return book

# print(kaprekar_seq(1945)) # 6174

# how do I get the value from a node in a linked list?

# from typing import List, Optional
# def isPalindrome(self, head: Optional[ListNode]) -> bool:
#     res = ""
#     cur = head
#     while cur:
#         res += str(cur.val)
#         cur = cur.next
#     return res == res[::-1]


# from typing import List
# def fizz_buzz(n: int) -> List[str]:
#     res = []
#     for i in range(1, n + 1):
#         if i % 3 == 0:
#             res.append("Fizz")
#         elif i % 5 == 0:
#             res.append("Buzz")
#         elif (i  % 3 == 0) and (i % 5 == 0):
#             res.append("FizzBuzz")
#     return res


# print(
#     fizz_buzz(15)
# )  # ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]


# def vowel_to_upper_cons_to_lower(string: str) -> str:
#     vowels = "aeiouy"
#     string = list(string)
#     N = len(string)
#     for i in range(N):
#         if string[i] in vowels:
#             string[i] = string[i].upper()
#         else:
#             string[i] = string[i].lower()
#     return "".join(string)

# print(vowel_to_upper_cons_to_lower("Hello")) # "hEllO"

# from typing import List
# def split_Even_Odd_Sublist(num_array: List[int]) -> List[List[int]]:
#     res = [[] for _ in range(2)]
#     for i in range(len(num_array)):
#         if  num_array[i] % 2 == 0:
#             res[0].append(num_array[i])
#         else:
#             res[1].append(num_array[i])
#     return res

# print(split_Even_Odd_Sublist([1, 2, 3, 4, 5, 6, 7, 8, 9])) # [[2, 4, 6, 8], [1, 3, 5, 7, 9]]


# class Solution:
#     def tribonacci(self, n: int) -> int:
#         if n == 0:
#             return 0
#         if n == 1 or n == 2:
#             return 1
#         dp = [0] * (n + 1)
#         dp[1] = dp[2] = 1
#         for i in range(3, n + 1):
#             dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
#         return dp[n]


# class Solution:
#     def minOperations(self, k: int) -> int:
#         nums = [1]
#         num_operations = 0

#         if sum(nums) >= k:
#             return 0

#         while True:
#             max_num = max(nums)

#             if max_num * 2 >= k:
#                 nums.append(max_num)
#             else:
#                 nums.append(max_num * 2)

#             num_operations += 1

#             if sum(nums) >= k:
#                 break

#         operations_dict = dict()
#         for i in range(num_operations):
#             if nums[i] == nums[i + 1]:
#                 operation = "increase"
#                 element = nums[i]
#             else:
#                 operation = "duplicate"
#                 element = nums[i] * 2
#             operations_dict[i] = {"operation": operation, "element": element}

#         for i in range(len(operations_dict)):
#             if operations_dict[i]["operation"] == "increase":

# from typing import List
# class Solution:
#     def largestAltitude(self, gain: List[int]) -> int:
#       max_val, alt = 0, 0
#       for i in gain:
#         alt += i
#         max_val = max(alt, max_val)
#       return max_val

# print(Solution().largestAltitude([-5, 1, 5, 0, -7])) # 1

# import collections
# from typing import List
# class Solution:
#     def singleNumber(self, nums: List[int]) -> int:
#         return min(collections.Counter(nums), key=collections.Counter(nums).get)

# print(Solution().singleNumber([4, 1, 2, 1, 2])) # 4


# from typing import Optional


# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# class Solution:
#     def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
#         current = root
#         res = []
#         while current:
#             if current.val == val:
#                 res.append(current)
#             elif current.val < val:
#                 current = current.right
#             else:
#                 current = current.left
#         return res
# print(Solution().searchBST([4, 2, 7, 1, 3], 2)) # [2, 1, 3]


# def length(seq) -> int:
#     if isinstance(seq, (str, list, tuple, set, dict, range, bytes)):
#         return len(seq)
#     elif isinstance(seq, int):
#         return len(str(seq))
#     elif isinstance(seq, float):
#         return len(str(seq).replace(".", ""))
#     else:
#         return seq


# print(length("hello"))  # 5
# print(length([1, 2, 3, 4, 5]))  # 5
# print(length((1, 2, 3, 4, 5)))  # 5
# print(length({1, 2, 3, 4, 5}))  # 5
# print(length({"one": 1, "two": 2, "three": 3}))  # 3
# print(length(range(5)))  # 5
# print(length(12345))  # 5
# print(length(b"hello"))  # 5
# print(length(12345.0))  # 5
# print(length(True))  # 4

# from itertools import accumulate
# def summation(seq) -> int:
#     res = [i for i in seq if isinstance(i, int)]
#     return list(accumulate(res))[-1]

# print(summation([1, 2, 3, 4, 5])) # 15


# from typing import List
# def kaprekar_seq(n: int, book: List[int] = None) -> List[int]:
#     if book is None:
#         book = []
#     n = sorted(str(n), reverse=True)
#     n2 = sorted(n, reverse=False)
#     if n == n2:
#         book.append(int("".join(n)))
#         return book
#     book.append(int("".join(n)))
#     product = int("".join(n)) - int("".join(n2))
#     n = sorted(str(product), reverse=True)
#     n2 = sorted(n, reverse=False)
#     book.append(product)
#     if product != 6174:
#         return kaprekar_seq(product, book)
#     return book


# print(kaprekar_seq(1945)) # 6174
# def isInc(n: int) -> bool:
#     prev = n % 10
#     if n < 10:
#         return True
#     elif n > 10:
#         return isInc(n // 10) and prev > n // 10 % 10

# from typing import List
# class Solution:
#     def firstMissingPositive(self, nums: List[int]) -> int:
#         if not nums:
#             return 1

#         n = len(nums)
#         for i in range(n):
#             while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
#                 nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]

#         for i in range(n):
#             if nums[i] != i + 1:
#                 return i + 1

#         return n + 1
# nums = list(range(1, 10001))
# print(Solution().firstMissingPositive([1, 2, 0])) # 3
# print(Solution().firstMissingPositive(nums)) # 100001

# from typing import List
# def collatz_seq(q: int) -> List[int]:
#   if q == 1:
#     return [1]
#   elif q % 2 == 0:
#     return [q] + collatz_seq(q  // 2)
#   else:
#     return [q] + collatz_seq(3 * q + 1)

# print(collatz_seq(13)) # [12, 6, 3, 10, 5, 16, 8, 4, 2, 1]


# class Solution:
#     def hammingWeight(self, n: int) -> int:
#         return bin(n)[2:].count('1')

# def variable_to_camel_case(text: str) -> str:
#     for i, str in enumerate(text):
#         if i == 0:
#           continue
#         if str == "_":
#             text = text.replace(str, "")
#             text = text[:i] + text[i].upper() + text[i + 1:]
#     return text

# print(variable_to_camel_case("hello_world")) # "helloWorld"


# def camel_case_to_snake_case(camel: str) -> str:
#     for i, str in enumerate(camel):
#         if str.isupper():
#             camel = camel.replace(str, "_" + str.lower())
#     return camel

# print(camel_case_to_snake_case("helloWorld")) # "hello_world"

# import time

# def anagram(s1: str, s2: str) -> bool:
#   return len(set(s2) & set(s1)) == len(s2)

# print(anagram("listen", "silent")) # True

# from collections import Counter

# def anagrams2(s1: str, s2: str) -> bool:
#   return Counter(s1) == Counter(s2)

# print(anagrams2("listen", "silent")) # True

# def convertToSeconds(s: str) -> int:
#     return int(s[:2]) * 3600 + int(s[3:5]) * 60 + int(s[6:])

# print(convertToSeconds("12:30:15"))  # 45015

# from typing import Optional

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#     def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
#         if not head or not head.next:
#             return None
#         curr = head
#         count = 0
#         while curr:
#             count += 1
#             curr = curr.next
#         mid = count // 2
#         curr = head
#         prev = None
#         while mid:
#             prev = curr
#             curr = curr.next
#             mid -= 1
#         prev.next = curr.next
#         return head


# from typing import List
# from collections import defaultdict
# class Solution:
#     def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
#         # Dictionary to store groups of anagrams
#         res = defaultdict(list)
#         # Iterate through the list of strings
#         for s in strs:
#             # Initialize count list with 26 zeros, representing the 26 letters of the English alphabet
#             count = [0] * 26
#             # Iterate through the characters of the string
#             for c in s:
#                 # Increment the count of the character at its position in the alphabet
#                 count[ord(c) - ord("a")] += 1
#             # Convert the count list to a tuple to make it hashable and use as a key in the dictionary
#             # Add the original string to the list corresponding to the tuple key
#             res[tuple(count)].append(s)
#         # Return the values of the dictionary, which are lists of grouped anagrams
#         return res.values()

# print(Solution().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) # [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

# def pascal_output(size: int) -> str:
#   res = []
#   space = " "
#   for i in range(size):
#     res.append(
#       space * (size - i - 1) +
#       " ".join(str(11 ** i))
#     )
#   return "\n".join(res)

# print(pascal_output(5))


# def upto_n(n: int) -> str:
#     res = []
#     row = []
#     count = 1
#     while count <= n:
#         for i in range(len(res) + 1):
#             if count <= n:
#                 row.append(str(count))
#                 count += 1
#         res.append(" ".join(row))
#         row = []
#     res.append("**")
#     return "\n".join(res)
# print(upto_n(15))

# from typing import List
# from collections import defaultdict


# class Solution:
#     def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
#         def atMostK(k: int) -> int:
#             count = defaultdict(int)
#             res = l = 0
#             for r in range(len(nums)):
#                 if count[nums[r]] == 0:
#                     k -= 1
#                 count[nums[r]] += 1
#                 while k < 0:
#                     count[nums[l]] -= 1
#                     if count[nums[l]] == 0:
#                         k += 1
#                     l += 1
#                 res += r - l + 1
#             return res
#         return atMostK(k) - atMostK(k - 1)
# print(Solution().subarraysWithKDistinct([1, 2, 1, 3, 4], 3)) # 7


# class Solution:
#     def strStr(self, haystack: str, needle: str) -> int:
#         N = len(needle)
#         for i in range(len(haystack) - N + 1):
#             if haystack[i:N + i] == needle:
#                 return i
#         return -1


# print(Solution().strStr("hello", "ll")) # 2
# from typing import List
# class Solution:
#     def searchInsert(nums: List[int], target: int) -> int:
#         found = -1 if not nums.index(target) else nums.index(target)
#         if found == -1:
#             nums.append(target)
#             nums.sort()
#             return nums.index(target)
#         return found
# print(Solution.searchInsert([1, 3, 5, 6], 5)) # 2


# class Solution:
#     def lengthOfLastWord(self, s: str) -> int:
#         return len(s.strip().replace(" ", " ").split(" ")[-1])

# from typing import List
# class Solution:
#     def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
#         """
#         Do not return anything, modify nums1 in-place instead.
#         """
#         nums1 = [i for i in  nums1 if nums[i] != 0]
#         nums2 = [i for i in  nums2 if nums[i] != 0]
#         print(f"1{nums1}, 2{nums2}")
#         return [1, 2, 2, 3, 5, 6]

# from typing import List
# class Solution:
#     def countAlternatingSubarrays(nums: List[int]) -> int:
#         count = 0
#         length = 1

#         for i in range(1, len(nums)):
#             if nums[i] != nums[i - 1]:
#                 length += 1
#             else:
#                 count += (length * (length + 1)) // 2
#                 length = 1

#         count += (length * (length + 1)) // 2
#         return count
# nums = [0, 1, 1, 1]
# print(Solution.countAlternatingSubarrays(nums))


# def manhattan_distance(point1: list, point2: list) -> int:
#     return abs(point1[0] - point2[0]) + abs(point1[1] - point2[1])

# print(manhattan_distance([1, 1], [0, 0])) # 2

from typing import List

class Solution:
    def minimumDistance(self, points: List[List[int]]) -> int:
        min_max_distance = float('inf')
        for i in range(len(points)):
            point_removed = points.pop(i)
            max_distance = self.calculate_max_distance(points)
            min_max_distance = min(min_max_distance, max_distance)
            points.insert(i, point_removed)
        return min_max_distance

    def calculate_max_distance(self, points: List[List[int]]) -> int:
        max_distance = 0
        for i in range(len(points)):
            for j in range(i + 1, len(points)):
                max_distance = max(max_distance, self.manhattan_distance(points[i], points[j]))
        return max_distance

    def manhattan_distance(self, point1: list, point2: list) -> int:
        return abs(point1[0] - point2[0]) + abs(point1[1] - point2[1])

print(Solution().minimumDistance([[3, 10], [5, 15], [10, 2], [4, 4]]))  # Output: 12
print(Solution().minimumDistance([[1, 1], [1, 1], [1, 1]]))  # Output: 0
print(
    Solution().minimumDistance([[3, 2], [3, 9], [7, 10], [4, 4], [8, 10], [2, 7]])
)  # Output: 4
# class Solution:
#     def romanToInt(self, s: str) -> int:
#         d = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
#         sum = 0
#         N = len(s)
#         i = 0
#         while i < N:
#           if i < N - 1 and d[s[i]] < d[s[i + 1]]:
#             sum += d[s[i+1]] - d[s[i]]
#             i += 2
#           else:
#             sum += d[s[i]]
#             i += 1
#         return sum

from typing import List
from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)
        return [num for num, _ in count.most_common(k)]


print(Solution.topKFrequent(
  
))
