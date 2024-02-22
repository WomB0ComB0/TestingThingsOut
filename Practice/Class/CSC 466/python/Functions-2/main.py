# Seed
import random

random.seed(1)
r = random.randint(3, 20)

# Selet one random number frm range
import random

start = 5
end = 10
# r = random.randrange(start, end, step)

# Select element from list randomly
import random

x = random.choice(xs)
# The funciton random .choices(lst) randomly selectes one elment from the list and returns it

# Select Element from List Randomly

import random

xs = [1, 2, 3, 4, 5]
x = random.choice(xs)
# The function random.choice(lst) randomly selects one element from the lsit lsti and returns it

# Time Functions
from time import clock

print("Enter your name: ", end="")
start_time = clock()
name = input()
elapsed = clock() - start_time
print(name, "it took you", elapsed, "seconds to respond")

from time import clock

sum = 0
start = clock()
for n in range(1, 10000001):
    sum += n
elapsed = clock() - start  # Stop the stopwatch
print("sum:", sum, "time:", elapsed)  # Report results

from time import sleep

for count in range(10, -1, -1):  # Range 10, 9, 8, ... , 0
    print(count)  # Display the count
    sleep(1)  # Suspend execution for 1 second

from random import randrange, seed

seed(23)  # Set random number seed
for i in range(0, 100):  #  print 100 random numbers
    print(randrange(1, 1001), end="")  # Range  1, ... 1,000, inclusive
print()  # print new line

from random import randrange

# Roll the die three times

for i in range(0, 3):
    # Generate random number in the rang 1...7
    value = randrange(1, 7)

    # Show the die
    print("+-------+")
    if value == 1:
        print("|       |")
        print("|   *   |")
        print("|       |")
    elif value == 2:
        print("| *     |")
        print("|       |")
        print("|     * |")
    elif value == 3:
        print("|     * |")
        print("|   *   |")
        print("| *     |")
    elif value == 4:
        print("| *   * |")
        print("|       |")
        print("| *   * |")
    elif value == 5:
        print("| *   * |")
        print("|   *   |")
        print("| *   * |")
    elif value == 6:
        print("| * * * |")
        print("|       |")
        print("| * * * |")
    else:
        print(" *** Error: illegal die value ***")
    print("+-------+")
from random import choice

for i in range(10):
    print(
        choice(
            (
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
                "nine",
                "ten",
            )
        )
    )

# System-specific Functions

import sys

sum = 0
while True:
    x = int(input("Enter a number (999 ends): "))
    if x == 999:
        sys.exit(0)
    sum += x
    print("sum:", sum)

# The eval functions

xl = eval(input("Entry xl? "))
print("xl:", xl, "type:", type(xl))

x2 = eval(input("Entry x2? "))
print("x2:", x2, "type:", type(x2))

x3 = eval(input("Entry x3? "))
print("x3:", x3, "type:", type(x3))

x4 = eval(input("Entry x4? "))
print("x4:", x4, "type:", type(x4))
