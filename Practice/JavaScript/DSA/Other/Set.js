// A set is a collection of items that are unique i.e no elements cna be repeated. Set in ES6 are ordered: elements of the set can be iterated in the insertion order. Set can store any type of value whether primitive or objects

// Syntax:
// new Set([iterable]);

// Create sets with various values
const set1 = new Set(['sumit', 'ghosh', 'sumit', 'ghosh']);
const set2 = new Set('foooood');
const set3 = new Set([10, 20, 30, 40, 50, 10, 20, 30, 40, 50]);

// Create an empty set and add elements using chaining
const set4 = new Set();
set4.add(10).add(20).add(30).add(40).add(50);

// Display the sets
console.log('Set 1:', set1);
console.log('Set 2:', set2);
console.log('Set 3:', set3);
console.log('Set 4:', set4);

// forEach(): Iterate over values
console.log('Iterating over Set 3:');
set3.forEach((value) => {
  console.log(value);
});

// delete(): Remove an element by value
const deletedValue = 30;
const deleted = set4.delete(deletedValue);
console.log(`Was ${deletedValue} deleted from Set 4?`, deleted);

// has(): Check if a value exists
const valueToCheck = 20;
console.log(`Does Set 4 have ${valueToCheck}?`, set4.has(valueToCheck));

// size: Get the number of elements in the Set
console.log('Number of elements in Set 4:', set4.size);

// clear(): Remove all elements from the Set
set2.clear();
console.log('Set 2 after clearing:', set2);
