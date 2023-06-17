import math

# weeks = int(input().strip())
# def double_population(weeks):
#     organisms = 1
#     for _ in range(weeks):
#         organisms *= 2
#     return organisms
# result = double_population(weeks)
# print(result)
def last_fact_digit(n):
    factorial =  math.factorial(n)
    last_digit = factorial % 10
    return last_digit

print(last_fact_digit(5))