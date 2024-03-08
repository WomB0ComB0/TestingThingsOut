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
    df = pd.read_csv(
        "C:\\Users\\Mike Odnis\\documents\\github\\testingthingsout\\practice\\class\\csc 466\\python\\exercise\\iris.csv"
    )
    dfrandom = df.sample(frac=1, random_state=1119).reset_index(drop=True)
    df1 = dfrandom.iloc[:, 0:4].astype(float)
    df2 = dfrandom.iloc[:, 4]
    dfrandom = pd.concat([df1, df2], axis=1)
    print(dfrandom)
    dftrain = dfrandom.iloc[0:100, :]
    print(dftrain)
    dftest = dfrandom.iloc[100:, :]
    print(dftest)
    dfsetosa = dfrandom[dfrandom["species"] == "setosa"]
    print(dfsetosa)
    dfversicolor = dfrandom[dfrandom["species"] == "versicolor"]
    print(dfversicolor)
    dfvirginica = dfrandom[dfrandom["species"] == "virginica"]
    mean_setosa = dfsetosa.iloc[:, 0:4].mean(axis=0)
    print("mean setosa\n", mean_setosa)
    mean_versicolor = dfversicolor.iloc[:, 0:4].mean(axis=0)
    print("mean versicolor\n", mean_versicolor)
    mean_virginica = dfvirginica.iloc[:, 0:4].mean(axis=0)
    print("mean virginica\n", mean_virginica)
    var_setosa = dfsetosa.iloc[:, 0:4].var(axis=0)
    print("var setosa\n", var_setosa)
    var_vericolor = dfversicolor.iloc[:, 0:4].var(axis=0)
    print("var versicolor\n", var_vericolor)
    var_virginica = dfvirginica.iloc[:, 0:4].var(axis=0)
    print("var virginica\n", var_virginica)
    count_correct = 0
    print(len(dftest))
    for i in range(0, len(dftest)):
        x = dftest.iloc[i, 0:4].values
        probC1 = compute_gaussian_probab(x, mean_setosa, var_setosa)
        probC2 = compute_gaussian_probab(x, mean_versicolor, var_vericolor)
        probC3 = compute_gaussian_probab(x, mean_virginica, var_virginica)
        probs = np.array([probC1, probC2, probC3])
        maxindex = probs.argmax(axis=0)
        if dftest.iloc[i, 4] == "setosa":
            index = 0
        if dftest.iloc[i, 4] == "versicolor":
            index = 1
        if dftest.iloc[i, 4] == "virginica":
            index = 2
        if maxindex == index:
            count_correct += 1
    print("classification accuracy", count_correct / len(dftest) * 100)

if __name__ == "__main__":
    main()
    