function BubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log(arr)
  return arr
}

BubbleSort([5, 3, 8, 2, 1, 4]) // [1, 2, 3, 4, 5, 8]
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Optimized Bubble Sort

function BubbleSort(arr) {
  var i, j;
  var len = arr.length;

  var isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }
  console.log(arr)
}

BubbleSort([5, 3, 8, 2, 1, 4]) // [1, 2, 3, 4, 5, 8]