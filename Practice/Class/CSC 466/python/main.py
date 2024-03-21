## Lists ## 
# - Used for storing different types of data
student = [10, "Amar", 'M', 50, 55, 57, 67, 47]
e_list = []
# - Indexing + Slicing can be applied on list
print(student[1]) # Amar
print(student[0: 3: 1]) # [10, "Amar", 'M']
student[::] # Print all elements

# Create list with integer numbers
num = [10, 20, 30, 40, 50]
print(num)
print("num[0]; %d\tnum[2]: %d\n" % (num[0], num[2]))

# Create list with string
names = ["Ram", "Amar", "Thomas"]
print(names)
print("names[0]: %s\tnames[2]: %s\n" % (names[0], names[2]))

# Create list with different dtypes
x = [10, 20, 1.5, 6.7, "Ram", 'M']
print(x)
print("x[0]; %d\tx[2]: %fx[4]: %s\tx[5]: %c\n" % (x[0], x[2], x[4], x[5]))

# Create list
num = list(range(4, 9, 2))
print(num)

## Updating list ##
# Creation
lst = list(range(1, 5))
# Append
lst.apped(9)
print(lst)
# Update-1
lst[1] = 8
print(lst)
# Update-2
lst[1: 3] = 10, 11
print(lst)
# delete
del lst[1]
# remove
lst.remove(11)
print(lst)
# reverse
lst.reverse()
print(lst)

## Concatenation of Two List ##
x = [10, 20, 30]
y = [5, 6, 7]
print(x + y)

## Repetition List ##
# '*' is used to repeat the list 'n' times
x = [10, 20, 30]
print(x * 2)

## Membership of List ##
# 'in' and 'not in' operators are used to check, whether an element belongs to the list or not
x = [1, 2, 3, 4, 5]
a = 3
print(a in x) # Returns True, if the item is found in the list

x = [1, 2, 3, 4, 5]
a = 7
print(a not in x) # Returns True, if the item is not found in the list

## Aliasing And Cloning Lists ##
# Aliasing: Giving new name for the existing list
x = [10, 20, 30, 40]
y = x # Note: No separate memory will be allocated for y

# Cloning / Copy: Making a copy
x = [10, 20, 30, 40]
y = x[:]
y = x.copy()
x[1] = 99
print(x)
print(y) # Note: changes made in one list will not reflect other

## Exercise ##

# To find the maximum and minimum item in a list of items
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print("Max: %s\nMin: %s" % (max(nums), min(nums)))

# Implement Bubble sort

# Optimized Bubble sort in Python
# Bubble sort is a sorting algorithm that is used to sort items of a list. It is named as bubble sort because, same as like bubbles the smaller or lighter elements comes up (at start) and bigger or heavier elements goes down (at end).
def bubbleSort(array): # function to implement bubble sort
  # loop through each element of array
  for i in range(len(array)):
    # keep track of swapping
    swapped = False
    # loop to compare array elements
    for j in range(0, len(array) - i - 1):
      # compare two adjacent elements change > to < to sort in descending order
      if array[j] > array[j + 1]:
        # swapping occurs if elements are not in the intended order
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
        swapped = True
    # no swapping means the array is already sorted, so no need for further comparison
    if not swapped:
      break
data = [-2, 45, 0, 11, -9]

bubbleSort(data)

print('Sorted Array in Ascending Order:')
print(data)

# To know how many times an element occurred in the list
from collections import Counter
lst = [1, 2, 3, 4, 1, 2, 3, 1, 2, 1]
a = 1
print(Counter(lst)[a])

# To create employee list and search for the particular employee
employee = ["Ram", "Amar", "Thomas", "John"]
def searchEmployee(name):
  if name in employee:
    return name
print(searchEmployee("Amar")) # Amar

## To FInd common item ##
l1 = ["Thomas", "Richard", "Purdie", "Chris"]

#To find the common item in two lists
l1 = ["Thomas", "Richard", "Purdie", "Chris"]
l2 = ["Ram", "Amar", "Anthony", "Richard"]
#Covert them into sets
s1 = set(l1)
s2 = set(l2)
#Filter intersection of two sets
s3 = s1.intersection(s2)
#Convert back into the list
common = list(s3)
print(common)

## Nested List ##
# To create a list with anotehr lsit as element
l1 = [10, 20, 30, [80, 90]]
print(l1)

## List Comprehensions ##
# - List comprehensions represent creation of new lists from an iterable object(list, set, tuple, dictionary or range) that satisfies a given condition

# Example-1: Create a list with squares of integers from 1 to 
# Version-1
res = [i * i for i in range(1, 11)]
print(res)

# - List comprehensions represent creation of new lists from an iterable object(list, set, tuple, dictionary or range) that satisfies a given condition

# Example-3: Adding then element of two list one by one
# Example- 1
x = [10, 20, 30]
y = [1, 2, 3, 4]

lst = []

# Version-1
res = [i + j for i in x for j in y]
print(res)

# Example-2
let = [i + j for i  in "ABC" for j in  "DE"]
print(let)

## Tuple ##
# - Tuple is a collection of immutable objects

### Creating Tuples
# To create empty tuples
tupl = ()

# Tuple with one item
tup1 = (10,)

# Tuple with different dtypes 
tup3 = (10, 20, 1.1, 2.3, "Ram", 'M')

# Tuple with no braces
t4 = 10, 20, 30, 40

# Create tuple from the list
lst = [10, 20, 30, 40]
t5 = tuple(lst)

# Create tuple from range
t6 = tuple(range(1, 10, 2))

## Accessing Tuple ##
# Accessing items in the tuple can be done by indexing or slicing method, similar to that of list

## Basic Operations On Tuples ##
s = (10, "Ram", 10, 20, 30, 40, 50)
# To find the length of the tuple
print(len(s))

# Repetition operator
fee = (25.000, ) * 4
print(fee)

# Concatenate the tuples using *
ns = s + fee
print(ns)

# Membership
name = "Ram"
print(name in s)

# Repetition
t1 = (1, 2, 3)
t2 = t1 * 3
print(t2)

## Functions to Process Tuples
# - max() and min() functions are used to find the maximum and minimum item in the tuple
t = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print("Max: %s\nMin: %s" % (max(t), min(t)))

# - count() function is used to find the number of times an item occurred in the tuple
t = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print(t.count(3))

# - index() function is used to find the index of an item in the tuple
t = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print(t.index(3))

# - sorted() function is used to sort the items of the tuple
t = (5, 3, 8, 6, 2)
print(sorted(t))

# - len() function is used to find the length of the tuple
t = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print(len(t))

## Exercise ##

# 1. To accept elements in the form of a a tuple and display thier sum and average
t = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print("Sum: %d\nAvg: %f" % (sum(t), sum(t) / len(t)))

# 2. To find the first occurrence of an element in a tuple
t = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print(t.index(3))

# 3. To sort a tuple with nested tuples
t = ((1, 2, 3), (4, 5, 6), (7, 8, 9))
print(sorted(t))

# 4. To insert a new item into a tuple at a specified location
t = (1, 2, 3, 4, 5, 6, 7, 8, 9)
t = t[:3] + (10,) + t[3:]
print(t)

# 5. To modify or replace an existing item of a tuple with new item
t = (1, 2, 3, 4, 5, 6, 7, 8, 9)
t = t[:3] + (10,) + t[4:]
print(t)

# 6. To delete an element from a particular position in the tuple
t = t[:3] + t[4:]
print(t)





















































