import numpy as np
import pandas as pd
import math

import seaborn as sns
import matplotlib.pyplot as plt

class NaiveBayes:
    def __init__(self, df: pd.DataFrame):
        self.df = df
        self.dftrain = None
        self.dftest = None
        self.dfArea = None
        self.dfPerimeter = None
        self.dfCompactness = None
        self.dfLength = None
        self.dfWidth = None
        self.dfAsymmetry = None
        self.dfLengthGroove = None
        self.count_correct = 0

    def split_data(self):
        # self.dftrain = self.df.sample(frac=0.8, random_state=1119)
        # self.dftest = self.df.sample(frac=0.2, random_state=1119)
        # self.dftrain = self.df.iloc[0:150, :]
        # self.dftest = self.df.iloc[150:210, :]
        self.dftrain = self.df
        self.dftest = self.df

    def split_classes(self):
        self.dfArea = self.df[self.df["class"] == 1]
        self.dfPerimeter = self.df[self.df["class"] == 2]
        self.dfCompactness = self.df[self.df["class"] == 3]

    def compute_gaussian_probability(
        self, x: np.ndarray, mean: np.ndarray, var: np.ndarray
    ) -> np.ndarray:
        res = 1
        epsilon = 1e-10
        for i in range(0, len(x)):
            if var[i] <= epsilon:
                continue
            exponent = (x[i] - mean[i]) ** 2 / (2 * var[i])
            if exponent <= 0:
                continue
            res *= (1 / (math.sqrt(2 * math.pi * var[i]))) * math.exp(
                -exponent
            )
        return res

    def main(self):
        self.split_data()
        self.split_classes()
        mean_area = self.dfArea.iloc[:, 0:7].mean(axis=0)
        mean_perimeter = self.dfPerimeter.iloc[:, 0:7].mean(axis=0)
        mean_compactness = self.dfCompactness.iloc[:, 0:7].mean(axis=0)
        var_area = self.dfArea.iloc[:, 0:7].var(axis=0)
        var_perimeter = self.dfPerimeter.iloc[:, 0:7].var(axis=0)
        var_compactness = self.dfCompactness.iloc[:, 0:7].var(axis=0)
        for i in range(0, len(self.dftest)):
            x = self.dftest.iloc[i, 0:7].values
            probC1 = self.compute_gaussian_probability(
                x, mean_area, var_area
            )
            probC2 = self.compute_gaussian_probability(
                x, mean_perimeter, var_perimeter
            )
            probC3 = self.compute_gaussian_probability(
                x, mean_compactness, var_compactness
            )
            probs = np.array([probC1, probC2, probC3])
            maxindex = probs.argmax(axis=0)
            if self.dftest.iloc[i, 7] == 1:
                index = 0
            if self.dftest.iloc[i, 7] == 2:
                index = 1
            if self.dftest.iloc[i, 7] == 3:
                index = 2
            if maxindex == index:
                self.count_correct += 1
        print(self.count_correct)
        print(len(self.dftest))
        print(self.count_correct / len(self.dftest))


if __name__ == "__main__":
    df = pd.read_csv(
        "C:\\Users\\Mike Odnis\\documents\\github\\testingthingsout\\practice\\class\\csc 466\\assignment\\wheat.csv"
    )
    df = df.sample(frac=1, random_state=1119).reset_index(drop=True)
    df1 = df.iloc[:, 0:7].astype(float)
    df2 = df.iloc[:, 7]
    df = pd.concat([df1, df2], axis=1)
    nb = NaiveBayes(df)
    nb.main()

    plt.figure(figsize=(10, 10))
    sns.heatmap(df.corr(), annot=True, cmap="coolwarm")
    plt.show()