function sort(arr) {
  var N = arr.length;

  for (var i = Math.floor(N / 2); i >= 0; i--) {
    heapify(arr, N, i);
  }

  for (var _i = N - 1; _i > 0; _i--) {
    // Move current root to end
    swap(arr, 0, _i);
    heapify(arr, _i, 0);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
} // To heapify a subtree rooted with node i which is an index in arr[].

function heapify(arr, N, i) {
  var largest = i; // Initialize largest as root

  var left = 2 * i + 1; // left = 2*i + 1

  var right = 2 * i + 2; // right = 2*i + 2

  if (left < N && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < N && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, N, largest);
  }
}