// 🌟Brush up on
let buffer = new Array(50).fill('_');
let gap_size = 10;
let gap_left = 0;
let gap_right = gap_size - gap_left - 1;
let size = 10;
// Function that is used to grow the gap 
// at index position and return the array 
function grow(k, position) {
  let a = buffer.slice(position, size);
  // Copy characters of buffer to a[] 
  // after position 
  buffer.splice(position, size - position, ...('_'.repeat(k)));
  // Insert a gap of k from index position 
  // gap is being represented by '-' 
  // Reinsert the remaining array 
  buffer.splice(position + k, 0, ...a);
  size += k;
  gap_right += k;
}
// Function that is used to move the gap 
// left in the array 
function left(position) {
  // Move the gap left character by character 
  // and the buffers 
  while (position < gap_left) {
    gap_left--;
    gap_right--;
    buffer[gap_right + 1] = buffer[gap_left];
    buffer[gap_left] = '_';
  }
}
// Function that is used to move the gap 
// right in the array 
function right(position) {
  // Move the gap right character by character 
  // and the buffers 
  while (position > gap_left) {
    gap_left++;
    gap_right++;
    buffer[gap_left - 1] = buffer[gap_right];
    buffer[gap_right] = '_';
  }
}
// Function to control the movement of gap 
// by checking its position to the point of 
// insertion 
function move_cursor(position) {
  if (position < gap_left) {
    left(position);
  } else {
    right(position);
  }
}

// Function to insert the string to the buffer 
// at point position 
function insert(input, position) {
  let len = input.length;
  let i = 0;
  // If the point is not the gap check 
  // and move the cursor to that point 
  if (position !== gap_left) {
    move_cursor(position);
  }

  // Insert characters one by one 
  while (i < len) {
    // If the gap is empty grow the size 
    if (gap_right === gap_left) {
      let k = 10;

      grow(k, position);
    }
    // Insert the character in the gap and 
    // move the gap 
    buffer[gap_left] = input.charAt(i);
    gap_left++;
    i++;
    position++;
  }
}
let temp = "";
for (let i = 0; i < size; i++) {
  temp += (buffer[i] + " ");
}
console.log("Initializing the gap buffer with size 10");
console.log(temp);
// Inserting a string to buffer
let input = "WinnerWinnerChickenDinner";
let position = 0;

insert(input, position);

console.log();
console.log("Inserting a string to buffer: WinnerWinnerChickenDinner");
console.log("Output: " + buffer.join(' '));

input = "FOR";
position = 5;

insert(input, position);

console.log();
console.log("Inserting a string to buffer: FOR");
console.log("Output: " + buffer.join(' '));
