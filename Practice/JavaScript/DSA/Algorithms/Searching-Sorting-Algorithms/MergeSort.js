function merge(left, right) {
  let arr = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

function mergeSort(arr) {
  const half = arr.length / 2

  if (arr.length < 2) return arr

  const left = arr.splice(0, half)
  return merge(mergeSort(left), mergeSort(arr))
}

array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array)); // [1, 2, 3, 4, 7, 8, 11]