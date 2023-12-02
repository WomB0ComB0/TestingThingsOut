// Iterative
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (iterativeFunction(arr, x, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");

x = 6;

if (iterativeFunction(arr, x, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");

// Recursive
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) return mid;
  if (val < arr[mid]) return binarySearch(arr, val, left, mid - 1);
  return binarySearch(arr, val, mid + 1, right);
}

// Driver code
let arr2 = [1, 3, 5, 7, 8, 9];
let x2 = 5;

if (recursiveFunction(arr2, x2, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");

x2 = 6;

if (recursiveFunction(arr2, x2, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");