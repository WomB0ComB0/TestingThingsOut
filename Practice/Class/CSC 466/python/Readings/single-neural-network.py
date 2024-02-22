import sys

def main():
  x0  = [1, 2, 3, 4, 5, 6, 7, 8, 9,  10]
  x1 = [2.2, 4.5, 5.6, 8.6, 10.15, 12.44,14.23, 16.2, 18.4, 20.4]
  y = [ 0, 1, 0, 1, 0, 1, 0, 0, 1, 1]
  
  w0 = 0.1
  w1 = -0.23
  b = 0.22
  
  for i in range(0, 10000):
    loss = 0
    for j in range(0, len(y)):
      a = w0 * x0[j] + w1 * x1[j] + b
      loss += 0.5 * (y[j] - a) ** 2
      dw0 = -(y[j] - a) * x0[j]
      dw1 = -(y[j] - a) * x1[j]
      db = -(y[j] - a)
      
      w0 = w0 - 0.001 * dw0
      w1 = w1 - 0.001 * dw1
      b = b - 0.001 * db
    print(f"loss: {loss}")
  x0 = 2.7
  x1 = 6.0
  output = x0 * w0 + x1 * w1 + b
  print('output for (', x0, ',', x1,')= ', output)
  
  x0 = 5.3
  x1 = 10.4
  output = x0 * w0 + x1 * w1 + b
  print('output for (', x0, ',', x1,')= ', output)

if __name__ == '__main__':
  sys.exit(int(main() or 0))