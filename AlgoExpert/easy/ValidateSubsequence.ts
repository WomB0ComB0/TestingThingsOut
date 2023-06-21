export function isValidSubsequence(array: number[], sequence: number[]) {
  const modSequence = [...sequence] // copy sequence
  for (let i = array.length - 1; i >= 0; i--){ // iterate backwards
    if(array[i] === modSequence[modSequence.length - 1]){ // if match, pop
      modSequence.pop();
    }
    if (!modSequence.length) return true; // if empty, return true
  }
  return false; // if not empty, return false
}