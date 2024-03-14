import numpy as np
import pandas as pd


class KNN:
    def __init__(self, k):
        self.k = k

    def euclidean_distance(self, p1, p2):
        return np.sqrt(np.sum((p1 - p2) ** 2))

    def predict(self, X_train, y_train, x_test):
        distances = []
        for i in range(len(X_train)):
            distance = self.euclidean_distance(X_train[i], x_test)
            distances.append((distance, y_train[i]))

        distances.sort(key=lambda x: x[0])
        neighbors = distances[: self.k]

        counts = {}
        for neighbor in neighbors:
            label = neighbor[1]
            counts[label] = counts.get(label, 0) + 1

        predicted_class = max(counts, key=counts.get)
        return predicted_class

data = {
    "X": [
        2.4,
        3.5,
        1.8,
        4.0,
        5.1,
        2.8,
        3.7,
        4.3,
        5.5,
        1.9,
        3.1,
        2.7,
        4.6,
        1.4,
        2.1,
        4.4,
        5.2,
        3.2,
        1.7,
        3.6,
    ],
    "Y": [
        4.2,
        6.2,
        2.1,
        3.9,
        4.4,
        5.7,
        1.5,
        3.3,
        2.9,
        1.1,
        5.6,
        3.2,
        4.5,
        4.9,
        2.8,
        2.2,
        1.8,
        2.7,
        3.5,
        6.1,
    ],
    "Target": [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0],
}

df = pd.DataFrame(data)

X = df[["X", "Y"]].values
y = df["Target"].values

knn = KNN(k=5)

new_observation = np.array([3.0, 4.0])

predicted_class = knn.predict(X, y, new_observation)
print("Predicted class:", predicted_class)
