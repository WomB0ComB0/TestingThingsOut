function shellSort(arr) {
  var n = arr.length;

  for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
    for (var i = gap; i < n; i++) {
      var temp = arr[i];
      var j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }
  }
}

var arr = [12, 34, 54, 2, 3];
console.log(arr); // prints [12, 34, 54, 2, 3]
shellSort(arr);
console.log(arr); // prints [2, 3, 12, 34, 54]