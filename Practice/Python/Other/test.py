# def getFinalString(s):
#     str = "AWS"
#     while str in s:
#         s = s.replace(str, "")
#     return -1 if s == "" else s
# print(getFinalString("AAWSWS"))

# import math
# def military_to_standard(hours, mins):
#     if hours > 12:
#         hours -= 12
#         return str(hours) + ":" + str(mins).zfill(2) + " PM"
#     elif hours == 12:
#         return str(hours) + ":" + str(mins).zfill(2) + " PM"
#     elif hours == 0:
#         hours += 12
#         return str(hours) + ":" + str(mins).zfill(2) + " AM"
#     else:
#         return str(hours) + ":" + str(mins).zfill(2) + " AM"
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
    #   
# def spiralTraverse(array):
    # traversedArray = []
    # while array: # while array is not empty
        # traversedArray += array.pop(0) # pop the first row and add it to traversedArray
        # .pop(0) removes the first element of the array and returns ite
        # array = list(zip(*array))[::-1] #  rotate the remaining array clockwise
    # return traversedArray

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
