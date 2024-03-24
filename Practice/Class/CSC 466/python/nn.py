import numpy as np

class NeuralNetwork:
    def __init__(self, input_size: int, hidden_size: int, output_size: int) -> None:
        self.input_size = input_size
        self.hidden_size = hidden_size
        self.output_size = output_size

        self.wi_hidden = np.random.randn(self.input_size, self.hidden_size)
        self.wi_output = np.random.randn(self.hidden_size, self.output_size)

        self.bias_hidden = np.random.randn(1, self.hidden_size)
        self.bias_output = np.random.randn(1, self.output_size)

    def sigmoid(self, x: np.ndarray) -> np.ndarray:
        return 1 / (1 + np.exp(-x))

    def sigmoid_derivative(self, x: np.ndarray) -> np.ndarray:
        return x * (1 - x)

    def forward(self, x: np.ndarray) -> np.ndarray:
        self.hidden = self.sigmoid(np.dot(x, self.wi_hidden) + self.bias_hidden)
        self.output = self.sigmoid(np.dot(self.hidden, self.wi_output) + self.bias_output)

        output_input = np.dot(x, self.wi_hidden) + self.bias_hidden
        return self.sigmoid(output_input)

    def MSE(self, y: np.ndarray, y_pred: np.ndarray) -> float:
        return np.mean(np.square(y - y_pred))

    def MSE_derivative(self, y: np.ndarray, y_pred: np.ndarray) -> np.ndarray:
        return 2 * (y_pred - y)

    def backward(self, x: np.ndarray, y: np.ndarray, y_pred: np.ndarray) -> None:
        self.output_error = self.MSE_derivative(y, y_pred) * self.sigmoid_derivative(y_pred)
        self.hidden_error = self.output_error.dot(self.wi_output.T) * self.sigmoid_derivative(self.hidden)

        self.wi_output -= self.hidden.T.dot(self.output_error)
        self.wi_hidden -= x.T.dot(self.hidden_error)

        self.bias_output -= np.sum(self.output_error, axis=0)
        self.bias_hidden -= np.sum(self.hidden_error, axis=0)

    def train(self, x: np.ndarray, y: np.ndarray, epochs: int) -> None:
        for i in range(epochs):
            y_pred = self.forward(x)
            self.backward(x, y, y_pred)
            print(f'Epoch {i + 1}/{epochs} - Loss: {self.MSE(y, y_pred)}')

    def predict(self, x: np.ndarray) -> np.ndarray:
        hidden_input = self.sigmoid(np.dot(x, self.wi_hidden) + self.bias_hidden)
        hidden_output = self.sigmoid(hidden_input)
        output_input = np.dot(hidden_output, self.wi_output) + self.bias_output
        output = self.sigmoid(output_input)
        return output

    def summary(self) -> None:
        print(f'Input size: {self.input_size}')
        print(f'Hidden size: {self.hidden_size}')
        print(f'Output size: {self.output_size}')
        print(f'Input to Hidden weights: {self.wi_hidden.shape}')
        print(f'Hidden to Output weights: {self.wi_output.shape}')
        print(f'Hidden bias: {self.bias_hidden.shape}')
        print(f'Output bias: {self.bias_output.shape}')

        print('\nInput to Hidden weights:')
        print(self.wi_hidden)
        print('\nHidden to Output weights:')
        print(self.wi_output)
        print('\nHidden bias:')
        print(self.bias_hidden)
        print('\nOutput bias:')
        print(self.bias_output)

    def __repr__(self) -> str:
        return f'NeuralNetwork({self.input_size}, {self.hidden_size}, {self.output_size})'

    def __str__(self) -> str:
        return f'Neural Network: {self.input_size} -> {self.hidden_size} -> {self.output_size}'

    def __len__(self) -> int:
        return self.hidden_size

    def __getitem__(self, key: str) -> np.ndarray:
        if key == 'wi_hidden':
            return self.wi_hidden
        elif key == 'wi_output':
            return self.wi_output
        elif key == 'bias_hidden':
            return self.bias_hidden
        elif key == 'bias_output':
            return self.bias_output
        else:
            return None

    def __setitem__(self, key: str, value: np.ndarray) -> None:
        if key == 'wi_hidden':
            self.wi_hidden = value
        elif key == 'wi_output':
            self.wi_output = value
        elif key == 'bias_hidden':
            self.bias_hidden = value
        elif key == 'bias_output':
            self.bias_output = value

    def __delitem__(self, key: str) -> None:

        if key == 'wi_hidden':
            del self.wi_hidden
        elif key == 'wi_output':
            del self.wi_output
        elif key == 'bias_hidden':
            del self.bias_hidden
        elif key == 'bias_output':
            del self.bias_output

    def __call__(self, x: np.ndarray) -> np.ndarray:

        return self.forward(x)

    def __add__(self, other: 'NeuralNetwork') -> 'NeuralNetwork':
        input_size = self.input_size
        hidden_size = self.hidden_size + other.hidden_size
        output_size = self.output_size
        return NeuralNetwork(input_size, hidden_size, output_size)

    def __sub__(self, other: 'NeuralNetwork') -> 'NeuralNetwork':
        input_size = self.input_size
        hidden_size = self.hidden_size - other.hidden_size
        output_size = self.output_size
        return NeuralNetwork(input_size, hidden_size, output_size)

    def __mul__(self, other: 'NeuralNetwork') -> 'NeuralNetwork':
        input_size = self.input_size
        hidden_size = self.hidden_size * other.hidden_size
        output_size = self.output_size
        return NeuralNetwork(input_size, hidden_size, output_size)

input_x = [[0, 0], [0, 1], [1, 0], [1, 1]]
input_y = [[0], [1], [1], [0]]

def XOR() -> None:
  x = np.array(input_x)
  y = np.array(input_y)
  
  nn = NeuralNetwork(2, 2, 1)
  nn.summary()
  nn.train(x, y, 10000)
  
  print('\nPredictions:')
  for i in x:
    print(f'{i} -> {nn.predict(i)}')


def main() -> None:
  x = np.array(input_x)
  y = np.array(input_y)
  
  nn = NeuralNetwork(2, 2, 1)
  nn.summary()
  nn.train(x, y, 10000)
  
  print('\nPredictions:')
  for i in x:
    print(f'{i} -> {nn.predict(i)}')

if __name__ == '__main__':
  # main()
  XOR()
