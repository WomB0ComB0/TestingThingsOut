// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm to sort the array.
export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++){
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++)
      if (array[j]<array[smallestIndex])
        smallestIndex = j
    if (smallestIndex !== i){
      const temp = array[i]
      array[i] = array[smallestIndex]
      array[smallestIndex] = temp
    }
  }
  return array;
}