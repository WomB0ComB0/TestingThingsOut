// Map is a collection of elements where each element is stored as a Key, value pair. Map objects can hold both objects and primitive values as either key or value. When we iterate over teh map object it returns the key, and value pair in the same order as inserted.
// new Map([it])

// Create a new Map
const sampleMap = new Map();

// set(): Adds elements to the Map
sampleMap.set(1, 'One');
sampleMap.set(2, 'Two');
sampleMap.set(3, 'Three');

// get(): Retrieve elements from the Map
console.log('Value for key 2:', sampleMap.get(2));

// has(): Check if a key exists
console.log('Does the map have key 4?', sampleMap.has(4));

// size: Get the number of elements in the Map
console.log('Number of elements in the map:', sampleMap.size);

// forEach(): Iterate over key-value pairs
console.log('Iterating over the map:');
sampleMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

// delete(): Remove an element by key
const deleted = sampleMap.delete(1);
console.log('Was key 1 deleted?', deleted);

// clear(): Remove all elements from the Map
sampleMap.clear();
console.log('Map after clearing:', sampleMap);

// Create a new Map with an iterable (entries)
const iterableMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
]);

console.log('Value for key "b" in iterableMap:', iterableMap.get('b'));
console.log('Number of elements in iterableMap:', iterableMap.size);
