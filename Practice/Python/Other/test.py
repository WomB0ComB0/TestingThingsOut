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