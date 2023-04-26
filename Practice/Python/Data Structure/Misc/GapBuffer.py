# Python program of implementation of gap buffer
# A Gap bufffer is a data structure that uses a single buffer to hold multiple buffers. It allows insertion and deletion of elements at any position in the buffer in O(1) time.
buffer = ['_' for i in range(50)]
gap_size = 10
gap_left = 0
gap_right = gap_size - gap_left - 1
size = 10
# Function that is used to grow the gap at index position and return the array
def grow(k, position):
	global size, gap_right, gap_left, buffer
	a = buffer[position:size]
	# Insert a gap of k from index position gap is being represented by '-'
	buffer[position:position+k] = ['_' for i in range(k)]
	# Reinsert the remaining array
	buffer[position+k:position+k+size-position] = a
	size += k
	gap_right += k
# Function that is used to move the gap left in the array
def left(position):
	global gap_left, gap_right, buffer
	# Move the gap left character by character and the buffers
	while position < gap_left:
		gap_left -= 1
		gap_right -= 1
		buffer[gap_right+1] = buffer[gap_left]
		buffer[gap_left] = '_'
# Function that is used to move the gap right in the array
def right(position):
	global gap_left, gap_right, buffer
	# Move the gap right character by character and the buffers
	while position > gap_left:
		gap_left += 1
		gap_right += 1
		buffer[gap_left-1] = buffer[gap_right]
		buffer[gap_right] = '_'
# Function to control the movement of gap by checking its position to the point of insertion
def move_cursor(position):
	if position < gap_left:
		left(position)
	else:
		right(position)
# Function to insert the string to the buffer at point position
def insert(input, position):
	global gap_left, gap_right
	len_input = len(input)
	i = 0
	# If the point is not the gap check and move the cursor to that point
	if position != gap_left:
		move_cursor(position)
	# Insert characters one by one
	while i < len_input:
		# If the gap is empty grow the size
		if gap_right == gap_left:
			k = 10
			grow(k, position)
		# Insert the character in the gap and move the gap
		buffer[gap_left] = input[i]
		gap_left += 1
		i += 1
		position += 1
# Initializing the gap buffer with size 10
for i in range(10):
	buffer[i] = '_'
print("Initializing the gap buffer with size 10")
print(buffer[:size])
# Inserting a string to buffer
input_str = "GEEKSGEEKS"
position = 0
insert(input_str, position)
print("Inserting a string to buffer: GEEKSGEEKS")
print("Output:", buffer[:size])
input_str = "FOR"
position = 5
insert(input_str, position)
print("\n")
print("\n")
print("Inserting a string to buffer: FOR")
print("Output: ", end="")
for i in range(size):
	print(buffer[i], end=" ")