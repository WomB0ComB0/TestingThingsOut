"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.
function bubbleSort(array) {
    var isSorted = false, counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (var i = 0; i < array.length - 1 - counter; i++) {
            if (array[i + 1] < array[i]) {
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        counter++;
    }
    return array;
}
exports.bubbleSort = bubbleSort;
function swap(i, j, array) {
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
