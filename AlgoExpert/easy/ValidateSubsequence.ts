export function isValidSubsequence(array: number[], sequence: number[]) {
  const modSequence = [...sequence]
  for (let i = array.length - 1; i >= 0; i--){
    if(array[i] === modSequence[modSequence.length - 1]){
      modSequence.pop();
    }
    if (!modSequence.length) return true;
  }
  return false;
}