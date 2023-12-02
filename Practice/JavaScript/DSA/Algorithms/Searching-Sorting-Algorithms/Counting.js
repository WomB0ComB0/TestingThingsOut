function CountingSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let count = Array(max - min + 1).fill(0);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result.push(i + min);
      count[i]--;
    }
  }
  return result;
}


// Driver code
let arr = [5, 3, 8, 2, 1, 4];
console.log(CountingSort(arr)); // [1, 2, 3, 4, 5, 8]