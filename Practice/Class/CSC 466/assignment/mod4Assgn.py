import sys
import numpy as np
import pandas as pd
import math

def compute_gaussian_probab(x: int, mean: int, var: int) -> int:
    res = 1
    for i in range(0, len(x)):
        exponent = math.sqrt(-((x[i] - mean[i] ** 2 / ((2 * var[i])))))
        res *= (1 / (math.sqrt(2 * math.pi * var[i]))) * exponent
    return res


def main(): 
  df = pd.read_csv("C:\\Users\\Mike Odnis\\documents\\github\\testingthingsout\\practice\\class\\csc 466\\assignment\\wheat.csv")
  
if __name__ == "__main__":
    main()