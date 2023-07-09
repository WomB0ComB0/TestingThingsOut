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

# def spiralTraverse(array):
    # traversedArray = []
    # while array: # while array is not empty
        # traversedArray += array.pop(0) # pop the first row and add it to traversedArray
        # .pop(0) removes the first element of the array and returns ite
        # array = list(zip(*array))[::-1] #  rotate the remaining array clockwise
    # return traversedArray
scores = [12, 20, 10, 24]
def breakingRecords(scores):
    minMax = [0,0]
    minScore = 0
    maxScore = 0
    for i in range(len(scores)):
        if i == 0:
            minScore = scores[i]
            maxScore = scores[i]
        elif scores[i] < minScore:
            minScore = scores[i]
            minMax[1] += 1
        elif scores[i] > maxScore:
            maxScore = scores[i]
            minMax[0] += 1
    return minMax
print(breakingRecords(scores))