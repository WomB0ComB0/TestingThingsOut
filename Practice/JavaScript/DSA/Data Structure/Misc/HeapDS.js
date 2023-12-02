function heappush(heap, newKey) {
  // push the new key 
  heap.push(newKey);

  // get the current index of pushed key
  let curr = heap.length - 1;

  // keep comparing till root is reached or we terminate in middle
  while (curr > 0) {
    let parent = Math.floor((curr - 1) / 2)
    if (heap[curr] < heap[parent]) {
      // quick swap
      [heap[curr], heap[parent]] = [heap[parent], heap[curr]]
      // update the index of newKey
      curr = parent
    } else {
      // if no swap, break, since we heap is stable now
      break
    }
  }
}
/**
 * Swap the root node with last node (first item with last item in the array)
 * Remove the root node by popping the last item out of the array
 * Compare the new root node's key with it's children:
 *    If key is less than both of it's children keys then heap is stable
 *    Else, swap the key with the smaller child key
 * Repeat step 3 until last child is reached or the heap property is established
*/
function heappop(heap) {
  // swap root with last node
  const n = heap.length;
  [heap[0], heap[n - 1]] = [heap[n - 1], heap[0]]

  // remove the root i.e. the last item (because of swap)
  const removedKey = heap.pop();

  let curr = 0;

  // keep going till atleast left child is possible for current node
  while (2 * curr + 1 < heap.length) {
    const leftIndex = 2 * curr + 1;
    const rightIndex = 2 * curr + 2;
    const minChildIndex = (rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]) ? rightIndex : leftIndex;
    if (heap[minChildIndex] < heap[curr]) {
      // quick swap, if smaller of two children is smaller than the parent (min-heap)
      [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]]
      curr = minChildIndex
    } else {
      break
    }
  }

  // finally return the removed key
  return removedKey;
}

function heapify(arr) {
  const heap = []
  for (let item of arr) {
    heappush(heap, item)
  }
  return heap;
}

// follows pretty much the same logic as heappush, except minor modifications
/**
 * look at the first node and compare to it's children to see
 *  if it's the smallest one
 *  if not swap it with the smaller child.
*/
function percolateDown(heap, index) {
  let curr = index;
  // keep going down till heap property is established
  while (2 * curr + 1 < heap.length) {
    const leftIndex = 2 * curr + 1;
    const rightIndex = 2 * curr + 2;
    const minChildIndex = (rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]) ? rightIndex : leftIndex;
    if (heap[minChildIndex] < heap[curr]) {
      // quick swap, if smaller of two children is smaller than the parent (min-heap)
      [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]]
      curr = minChildIndex
    } else {
      break
    }
  }
}

function heapify(heap) {
  const last = Math.floor(heap.length / 2 - 1);
  for (let i = 0; i <= last; i++) {
    percolateDown(heap, i)
  }
  return heap
}

