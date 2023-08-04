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

def find_anagrams(word_list):
    my_dict = {}
    for word in word_list:
        srt_letters = ''.join(sorted(word))
        if srt_letters in my_dict:
            my_dict[srt_letters].append(word)
        else:
            my_dict[srt_letters] = [word]
    for key, words in my_dict.items():
        if len(words) >= 2:
            return [words[0], words[1]]
    return []
print(find_anagrams(["cat", "dog", "tac", "god", "act"]))